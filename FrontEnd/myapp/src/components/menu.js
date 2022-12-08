import {Link} from "react-router-dom";

function Menu(){
    return <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/PokemonList">Pokemon</Link></li>
            <li><Link to="/Pokedex">Pokedex</Link></li>
        </ul>
    </nav>
}

export default Menu;