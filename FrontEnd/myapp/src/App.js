import {Dashboard, Home} from "./pages/Dashboard";
import {Pokemon} from "./pages/PokemonList";
import {Pokedex} from "./pages/Pokedex";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> {/*ici on met l'URL dans le navigateur*/}
        <Pokemon /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route path="/Pokedex">
          <Pokedex  />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
  </Router>
}
export default App;
