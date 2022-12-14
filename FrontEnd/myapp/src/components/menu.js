import {Link} from "react-router-dom";

function Menu(){
    return <nav>
        <ul>
            <li><Link to="/">Pokemon</Link></li>
            <li><Link to="/Pokedex">Pokedex</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
        </ul>
    </nav>
}

export default Menu;
