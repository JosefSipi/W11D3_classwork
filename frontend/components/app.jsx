import { Route } from "react-router-dom";
import PokemonIndex from "./pokemon/pokemon_index";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import React from 'react';

const App = () => (
  
        
    <Route path="/" component={PokemonIndexContainer}></Route>

    
)

export default App;