<template>
  <main class="main-container">
  
    <SoinFull v-bind:soinId="soinId" />
    
  </main>
</template>

<script>
import SoinFull from "../components/SoinFull.vue";

export default {
  name: "Soin",
  components: {
    SoinFull
  },
  computed: {
    soinId() {
      return parseInt(this.$route.params.soinId, 10);
    }
  }
};
</script>

<style>
</style>
