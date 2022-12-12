import { useEffect, useState } from "react";
import { getAll } from "../api/pokedex";
import Menu from "../components/menu";
export function Pokedex(props) {
    const [pokedex, setPokemons] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
      // récupérer la liste des users seulement au chargement du composant !
      const pokedexFetched = getAll();
      pokedexFetched
        .then((result) => setPokemons(result))
        .catch((error) =>
          console.error("Erreur avec notre API :", error.message)
        );
    }, []);
  
    return (<div>
      <Menu />
      <div className="pokemon-list">
        <div class="flex">
          {pokedex.map((pokedex, key) => {
            return (
              <div key={key} className="bloc-pokedex">
                <img className="avatar" src={pokedex.img} />
                <h2>Nom: <br/>{pokedex.name} <br/><br/> Type: </h2> 
                <img className="types" src={pokedex.type} />
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );


}