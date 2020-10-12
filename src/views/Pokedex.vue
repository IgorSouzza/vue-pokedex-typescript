<template>
  <div>
    <div
      v-for="pokemon in this.$store.getters.pokemons"
      v-bind:key="pokemon.name"
    >
      {{pokemon.name}}
    </div>
    <Button @click.native="teste()">Load more</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import api from '@/services/api';

import Button from '@/components/Button.vue';

import { ApiType } from '@/models/api';
import { Pokemon } from '@/models/pokemon';

@Component({
  components: {
    Button,
  },
})
export default class Pokedex extends Vue {
  mounted() {
    if (this.$store.getters.pokemons <= 0) this.$router.push('/');
  }

  async teste() {
    const nextUrl = this.$store.getters.nextPage;
    const pokemons = await api.get<ApiType<Pokemon>>(`/pokemon/?${nextUrl}`);

    this.$store.commit('setPokemons', pokemons.data.results);
    this.$store.commit('setNextPage', pokemons.data.next.split('?')[1]);
  }
}
</script>
