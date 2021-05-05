import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import PokemonIndexItem from './components/pokemon/pokemon_index_item';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();

  // window.PokemonIndexItem = PokemonIndexItem;

  ReactDOM.render(<Root store={store} />, rootEl)
})