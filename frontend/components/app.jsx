import { Route } from "react_router_dom";
import PokemonIndex from "./pokemon/pokemon_index";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";

const App = () => (
    <Route path="/" component={PokemonIndexContainer} />
)

export default App;