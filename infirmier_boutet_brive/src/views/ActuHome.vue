<template>
<body class="container">
  

  <main class="main-container">
    <ActuList />
  </main>
  </body>
</template>

<script>
import ActuList from "../components/ActuList.vue";
export default {
  name: "ActuHome",
  components: {
    ActuList,
  }
};
</script>