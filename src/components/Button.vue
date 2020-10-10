<template>
  <div>
    <button
      type="button"
      @click="goTo()"
      >
        <slot />
      </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private goToUrl!: string;

  goTo() {
    this.$router.push(this.goToUrl);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
