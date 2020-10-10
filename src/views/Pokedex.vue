<template>
  <div>
    <h1>This is my pokedex</h1>
    <Button goToUrl="/">Back to home</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Button from '@/components/Button.vue';

@Component({
  components: {
    Button,
  },
})
export default class Pokedex extends Vue {}
</script>
