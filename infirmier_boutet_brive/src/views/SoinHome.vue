<template>
  <main class="bg-gray-200 border">
    <h1 class="mt-10 text-center text-4xl text-blue-900 pt-10">Les soins dispensés par votre infirmier à domicile</h1>
    <div class="lg:m-20 m-8">
      <p class="text-xl text-center">
        Votre infirmier libéral dispense des soins à domicile (le cas échéant) pour vous faire bénéficier de son expertise allant de l’urgence au suivi des soins post-opératoires, la prise en charge des personnes âgées ou la dispense de soins spécialisés
      </p>
    </div>
    <div class="flex flex-wrap overflow-hidden">
    <div class="container mx-auto">
<SoinList />
    </div>
    
    </div>
  </main>
</template>

<script>
import SoinList from "../components/SoinList.vue";
export default {
  name: "SoinHome",
  components: {
    SoinList,
  }
};
</script>