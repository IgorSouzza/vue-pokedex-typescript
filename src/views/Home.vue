<template>
  <div>
    <Button @click.native="goToPokedex()">Go to Pokedex</Button>
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
export default class Home extends Vue {
  async mounted() {
    const pokemons = await api.get<ApiType<Pokemon>>('/pokemon');

    this.$store.commit('setPokemons', pokemons.data.results);
    this.$store.commit('setNextPage', pokemons.data.next.split('?')[1]);
  }

  goToPokedex() {
    this.$router.push('/pokedex');
  }
}
</script>
