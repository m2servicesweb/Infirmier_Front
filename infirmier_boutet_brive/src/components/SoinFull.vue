<template>
  <div v-if="soinData">
    <h1>{{ soinData.title.rendered }}</h1>
    <article class="soin">
      <section class="informations">
        <ul>
          <li>
            Temps de préparation : {{ soinData.meta.preparation_time }} min.
          </li>
          <li>Temps de cuisson : {{ soinData.meta.cooking_time }} min.</li>
          <li>
            Coût par personne (pour {{ soinData.meta.servings }} pers.) :
            {{ soinData.meta.cost_per_person }} €
          </li>
        </ul>
        <div
          class="media-image"
          v-if="imageData"
          v-bind:style="{
            backgroundImage: cssBackgroundImage
          }"
        ></div>
      </section>

      <section class="ingredients">
        <h2>Ingrédients</h2>
        <ul>
          <li v-for="ingredient in ingredientsData" v-bind:key="ingredient.id">
            {{ ingredient.name }}
          </li>
        </ul>
      </section>
      <section class="preparation">
        <h2>Préparation</h2>
        <main v-html="soinData.content.rendered"></main>
      </section>
    </article>
  </div>
</template>

<script>
import ApiClient from "@/services/ApiClient.js";

export default {
  name: "SoinFull",
  components: {

  },
  props: {
    soinId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      soinData: null,
      imageData: null,
      ingredientsData: []
    };
  },
  methods: {
    getSoinData() {
      // @todo Récupérer les informations en meta
      let soinRequest = ApiClient.get("/wp/v2/soins/" + this.soinId);

      soinRequest.then(response => {
        this.soinData = response.data;

        if (this.soinData.featured_media !== 0) {
          this.getImageData();
        }

        if (this.soinData["soin-ingredients"].length > 0) {
          this.getIngredientsData();
        }
      });
      soinRequest.catch(error => {
        console.error(error);
      });
    },
    getImageData() {
      let imageRequest = ApiClient.get(
        "/wp/v2/media/" + this.soinData.featured_media
      );

      imageRequest.then(response => {
        this.imageData = response.data;
      });
    },
    getIngredientsData() {
      let ingredientsRequest = ApiClient.get("/wp/v2/soin-ingredients", {
        params: {
          /**
           * Je récupère la liste des ingrédients uniquement liés à ma recette
           */
          include: this.soinData["soin-ingredients"]
        }
      });

      ingredientsRequest.then(response => {
        this.ingredientsData = response.data;
      });
    }
  },
  computed: {
    cssBackgroundImage() {
      let cssBackgroundImage;

      if (this.imageData) {
        cssBackgroundImage =
          "url(" + this.imageData.media_details.sizes.full.source_url + ")";
      } else {
        cssBackgroundImage = null;
      }

      return cssBackgroundImage;
    },
  },
  mounted() {
    this.getSoinData();
  }
};
</script>

<style>
</style>
