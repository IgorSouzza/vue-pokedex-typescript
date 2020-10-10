<template>
  <div>
    <Button goToUrl="/pokedex">Go to Pokedex</Button>
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
export default class Home extends Vue {}
</script>
