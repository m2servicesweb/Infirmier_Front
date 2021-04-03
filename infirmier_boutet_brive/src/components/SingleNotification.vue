<template>
  <div class="alert" v-bind:class="[status]" v-on:click="remove">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "SingleNotification",
  props: {
    index: {
      type: Number,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  methods: {
    remove() {
      this.$store.dispatch("removeNotification");
    }
  }
};
</script>

<style></style>
