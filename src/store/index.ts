import Vue from 'vue';
import Vuex from 'vuex';

import { Pokemon } from '@/models/pokemon';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pokemons: [] as Pokemon[],
    nextPage: '',
  },

  getters: {
    pokemons: (state) => state.pokemons,
    nextPage: (state) => state.nextPage,
  },

  mutations: {
    setPokemons(state, pokemons: Pokemon[]) {
      pokemons.map((pokemon) => {
        state.pokemons.push(pokemon);

        return pokemon;
      });
    },
    setNextPage(state, url) {
      state.nextPage = url;
    },
  },
});

export default store;
