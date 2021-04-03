<template>
  <main class="main-container">
    <ActuFull v-bind:actuId="actuId" />
  </main>
</template>

<script>
import ActuFull from "../components/ActuFull.vue";

export default {
  name: "Actu",
  components: {
    ActuFull
  },
  computed: {
    actuId() {
      return parseInt(this.$route.params.actuId, 10);
    }
  }
};
</script>

<style></style>
