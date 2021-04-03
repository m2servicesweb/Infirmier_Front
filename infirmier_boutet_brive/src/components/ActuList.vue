<template>
  <div>
    <div class="filter-list">
      <div class="filter-list__title">Filtrer</div>
      <div class="filter-list__content">
        <div class="filter">
          <label class="filter__label">Type</label>
          <select
            class="filter__control select"
            v-model="selectedType"
            v-on:change="getActuItems()"
          >
            <option
              v-for="type in typeItems"
              v-bind:key="type.id"
              v-bind:value="type.id"
              >{{ type.name }} ({{ type.count }})</option
            >
          </select>
        </div>
        <div class="filter">
          <label class="filter__label">Ingrédients</label>
          <select
            multiple
            class="filter__control select"
            v-model="selectedIngredients"
            v-on:change="getActuItems()"
          >
            <option
              v-for="ingredient in ingredientItems"
              v-bind:key="ingredient.id"
              v-bind:value="ingredient.id"
              >{{ ingredient.name }} ({{ ingredient.count }})</option
            >
          </select>
        </div>
      </div>
    </div>
    <div class="actu-list">
      <h1>Recettes</h1>
      <!-- Utilisation "dynamique" des props -->
      <ActuExcerpt
        v-for="actu in actuItems"
        v-bind:key="actu.id"
        v-bind:actuId="actu.id"
        v-bind:title="actu.title.rendered"
        v-bind:excerpt="actu.excerpt.rendered"
        v-bind:imageId="actu.featured_media"
      />
      <!-- Utilisation statique des props -->
      <!--
      <ActuExcerpt
        title="Tarte aux fraises"
        excerpt="Une excellente recette de tarte aux fraises"
        image="https://source.unsplash.com/collection/157&random=1" />
      <ActuExcerpt
        title="Tarte aux abricots"
        excerpt="Une excellente recette de tarte aux abricots"
        image="https://source.unsplash.com/collection/157&random=2" />
      <ActuExcerpt
        title="Tarte à la rhubarbe"
        excerpt="Une excellente recette de tarte à la rhubarbe"
        image="https://source.unsplash.com/collection/157&random=3" />
      -->
    </div>
    <PaginationNavigation
      routeName="home-paginated"
      v-bind:pageNumber="pageNumber"
      v-bind:totalPages="totalPages"
    />
  </div>
</template>

<script>
import ApiClient from "@/services/ApiClient.js";
import ActuExcerpt from "./ActuExcerpt.vue";
import PaginationNavigation from "./PaginationNavigation.vue";

export default {
  name: "ActuList",
  data() {
    return {
      typeItems: [],
      ingredientItems: [],
      actuItems: [],
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
    handleActuListResponse(response) {
      this.actuItems = response.data;
    },
    handleActuListResponseError(error) {
      console.error(error);
    },
    getTypeItems() {
      /**
       * @type {Promise}
       */
      let typeListRequest = ApiClient.get("/wp/v2/actu-types");

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
      let ingredientListRequest = ApiClient.get("/wp/v2/actu-ingredients");
      ingredientListRequest.then(this.handleIngredientListResponse);
      ingredientListRequest.catch(this.handleIngredientListResponseError);
    },
    getActuItems() {
      let actuListRequestParams = {
        page: this.pageNumber
      };

      if (this.selectedType) {
        actuListRequestParams["actu-types"] = this.selectedType;
      }

      if (this.selectedIngredients.length) {
        actuListRequestParams[
          "actu-ingredients"
        ] = this.selectedIngredients;
      }

      let actuListRequest = ApiClient.get("/wp/v2/actus", {
        params: actuListRequestParams
      });
      actuListRequest.then(this.setTotalPages);
      actuListRequest.then(this.handleActuListResponse);
      actuListRequest.catch(this.handleActuListResponseError);

      /*
      // Sans variable stockant la promesse
      ApiClient
        .get(
          "/wp/v2/actus",
          {
            params: {
              page: this.pageNumber,
           },
          }
        )
        .then(this.setTotalPages)
        .then(this.handleActuListResponse)
        .catch(this.handleActuListResponseError);
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
      this.getActuItems();
    }
  },
  /**
   * Hook déclenché juste après que le DOM ait été modifié par le composant ( ~= DOMContentLoaded à l'échelle du Composant)
   */
  mounted() {
    this.getTypeItems();

    this.getIngredientItems();

    this.getActuItems();
  },
  components: {
    ActuExcerpt,
    PaginationNavigation
  }
};
</script>

<style>
</style>
