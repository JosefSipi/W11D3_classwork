import { Route } from "react_router_dom";
import PokemonIndex from "./pokemon/pokemon_index";

const App = () => (
    <Route path="/" component={PokemonIndexContainer} />
)

export default App;