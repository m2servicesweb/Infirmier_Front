<template>
  <div>
    <div class="soin-list">
      <h1>Recettes</h1>
      <!-- Utilisation "dynamique" des props -->
      <SoinExcerpt
        v-for="soin in soinItems"
        v-bind:key="soin.id"
        v-bind:soinId="soin.id"
        v-bind:title="soin.title.rendered"
        v-bind:excerpt="soin.excerpt.rendered"
        v-bind:imageId="soin.featured_media"
      />
      <!-- Utilisation statique des props -->
      <!--
      <SoinExcerpt
        title="Tarte aux fraises"
        excerpt="Une excellente recette de tarte aux fraises"
        image="https://source.unsplash.com/collection/157&random=1" />
      <SoinExcerpt
        title="Tarte aux abricots"
        excerpt="Une excellente recette de tarte aux abricots"
        image="https://source.unsplash.com/collection/157&random=2" />
      <SoinExcerpt
        title="Tarte à la rhubarbe"
        excerpt="Une excellente recette de tarte à la rhubarbe"
        image="https://source.unsplash.com/collection/157&random=3" />
      -->
    </div>
  </div>
</template>

<script>
import ApiClient from "@/services/ApiClient.js";
import SoinExcerpt from "./SoinExcerpt.vue";

export default {
  name: "SoinList",
  data() {
    return {
      typeItems: [],
      ingredientItems: [],
      soinItems: [],
      totalPages: 0,
      selectedType: null,
      selectedIngredients: []
    };
  },
  methods: {
    handleTypeListResponse(response) {
      // console.log("OK", response.data);
      // Contrairement à fetch, axios nous envoie les données directement dans un objet
      // J'insère les données reçues en réponse à ma requête HTTP dans une data de mon composant afin de les utiliser dans le template
      this.typeItems = response.data;
    },
    handleTypeListResponseError(error) {
      console.error("KO", error);
    },
    handleIngredientListResponse(response) {
      this.ingredientItems = response.data;
    },
    handleIngredientListResponseError(error) {
      console.error(error);
    },
    handleSoinListResponse(response) {
      this.soinItems = response.data;
    },
    handleSoinListResponseError(error) {
      console.error(error);
    },
    getTypeItems() {
      /**
       * @type {Promise}
       */
      let typeListRequest = ApiClient.get("/wp/v2/soin-types");

      /**
       * J'associe le traitement à effectuer en cas de succès (promesse résolue)
       *
       * La fonction fléchée me permet d'accéder au this de composant (qui correspond à l'instance de mon composant)
       */
      typeListRequest.then(this.handleTypeListResponse);

      /**
       * J'associe le traitement à effectuer en cas d'échec (promesse rejetée)
       */
      typeListRequest.catch(this.handleTypeListResponseError);
    },
    getIngredientItems() {
      let ingredientListRequest = ApiClient.get("/wp/v2/soin-ingredients");
      ingredientListRequest.then(this.handleIngredientListResponse);
      ingredientListRequest.catch(this.handleIngredientListResponseError);
    },
    getSoinItems() {
      let soinListRequestParams = {
        page: this.pageNumber
      };

      if (this.selectedType) {
        soinListRequestParams["soin-types"] = this.selectedType;
      }

      if (this.selectedIngredients.length) {
        soinListRequestParams[
          "soin-ingredients"
        ] = this.selectedIngredients;
      }

      let soinListRequest = ApiClient.get("/wp/v2/soins", {
        params: soinListRequestParams
      });
      soinListRequest.then(this.setTotalPages);
      soinListRequest.then(this.handleSoinListResponse);
      soinListRequest.catch(this.handleSoinListResponseError);

      /*
      // Sans variable stockant la promesse
      ApiClient
        .get(
          "/wp/v2/soins",
          {
            params: {
              page: this.pageNumber,
           },
          }
        )
        .then(this.setTotalPages)
        .then(this.handleSoinListResponse)
        .catch(this.handleSoinListResponseError);
      */
    },
    setTotalPages(response) {
      this.totalPages = parseInt(response.headers["x-wp-totalpages"], 10);

      return response;
    }
  },
  computed: {
    pageNumber() {
      let pageNumber;

      if (this.$route.params.pageNumber) {
        pageNumber = parseInt(this.$route.params.pageNumber, 10);
      } else {
        pageNumber = 1;
      }

      return pageNumber;
    }
  },
  /**
   * @link https://raoulkramer.de/vue-js-router-pagination/
   */
  watch: {
    /**
     * On observe les modifications du pageNumber afin de recharger la liste des recettes en fonction de la page sélectionnée
     *
     * @link https://fr.vuejs.org/v2/guide/computed.html#Observateurs
     */
    pageNumber() {
      this.getSoinItems();
    }
  },
  /**
   * Hook déclenché juste après que le DOM ait été modifié par le composant ( ~= DOMContentLoaded à l'échelle du Composant)
   */
  mounted() {
    this.getTypeItems();

    this.getIngredientItems();

    this.getSoinItems();
  },
  components: {
    SoinExcerpt,
  }
};
</script>

<style>
</style>
