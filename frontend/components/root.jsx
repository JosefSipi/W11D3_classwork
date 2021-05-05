import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';
import { HashRouter } from "react-router-dom";
import App from "./app";
import PokemonIndexItem from './pokemon/pokemon_index_item';

const Root = ({ store }) => (
  <Provider store={store}>
     
      <HashRouter>
        <PokemonIndexContainer/>
        <App />
      </HashRouter>

  </Provider>
);

export default Root;