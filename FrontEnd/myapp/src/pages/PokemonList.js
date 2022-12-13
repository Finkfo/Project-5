import { useEffect, useState } from "react";
import { filter, getAll } from "../api/pokemon";
import { getAlltypes } from "../api/getAlltypes";
import Menu from "../components/menu";
import { addToPokedex } from "../api/pokedex";

export function Pokemon(props) {
  const [pokemons, setPokemons] = useState([])
  const [types, setTypes] = useState([])

  const handleChangeType = async (name) => {
    const pokes = await filter(name)
    setPokemons(pokes)
  }

  //va s'executer seulement au lancement du composant (dep: [])
  useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant !
    const pokemonsFetched = getAll();
    pokemonsFetched
      .then((result) => setPokemons(result))
      .catch((error) =>
        console.error("Erreur avec notre API :", error.message)
      );

      const typesFetched = getAlltypes();
      typesFetched
        .then((result) => setTypes(result))
        .catch((error) =>
          console.error("Erreur avec notre API :", error.message)
        );
  }, []);
  return (
  <div>
    <Menu />
      <div className="filtrer">filtrer
      </div>
        {types.map((type, key) => {
          return (
              <img key={key} src={type.img} onClick={()=>handleChangeType(type.name)}  />
          )
        })}
    {/* <button onClick={() => filter(pokemon)}>trier par type !</button> */}
    <div className="pokemon-list">
      <div className="flex">
        {pokemons.map((pokemon, key) => {
          return (
            <div key={key} className="bloc-pokemon">
              <img className="avatar" src={pokemon.img} />
              <h2>Nom: <br />{pokemon.name} <br /><br /> Type: </h2>
              {
                pokemon.types.map((types,keyType)=>
                  <div key={keyType}>
                    <img className="types" src={types.img} />
                  </div>
                )
              }
              <button onClick={() => addToPokedex(pokemon)}>Capturer !</button>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );


}