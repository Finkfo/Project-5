import { useEffect, useState } from "react";
import { getAll, deleteOne } from "../api/pokedex";
import Menu from "../components/menu";
export function Pokedex(props) {
  const [pokedex, setPokedex] = useState([]);
  const [count, setCount]= useState(0);

  //va s'executer seulement au lancement du composant (dep: [])
  useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant !
    const pokedexFetched = getAll();
    pokedexFetched
      .then((result) => setPokedex(result))
      .catch((error) =>
        console.error("Erreur avec notre API :", error.message)
      );
  }, [count]);

  return (<div>
    <Menu />
    <div className="pokedex-list">
      <div className="flex">
        {pokedex.map((pokedex, key) => {
          return (
            <div key={key} className="bloc-pokedex">
              <img className="avatar" src={pokedex.img} />
              <h2>Nom: <br />{pokedex.name} <br /><br /> Type: </h2>
              {
                pokedex.types.map((types, keyType) =>
                  <div key={keyType}>
                    <img className="types" src={types.img} />
                  </div>
                )
              }
              <button onClick={async() => {
                await deleteOne(pokedex.name);setCount(count+1)}}>Libérer !</button>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );
}