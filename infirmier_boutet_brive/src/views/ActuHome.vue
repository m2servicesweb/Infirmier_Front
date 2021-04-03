<template>
<body class="container">
  

  <main class="main-container">
    <ActuList />
  </main>
<FooterLayout />
  </body>
</template>

<script>
import ActuList from "../components/ActuList.vue";
import FooterLayout from "@/components/FooterLayout.vue";
export default {
  name: "ActuHome",
  components: {
    ActuList,
    FooterLayout
  }
};
</script>