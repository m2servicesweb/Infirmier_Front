<template>
  <div v-if="actuData">
    <h1>{{ actuData.title.rendered }}</h1>
    <article class="actu">
      <section class="informations">
        <ul>
          <li>
            Temps de préparation : {{ actuData.meta.preparation_time }} min.
          </li>
          <li>Temps de cuisson : {{ actuData.meta.cooking_time }} min.</li>
          <li>
            Coût par personne (pour {{ actuData.meta.servings }} pers.) :
            {{ actuData.meta.cost_per_person }} €
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
        <main v-html="actuData.content.rendered"></main>
      </section>
    </article>
    <CommentList
      v-if="commentOpen"
      v-bind:postId="actuData.id"
      v-bind:commentCount="actuData.comment_count"
    />
  </div>
</template>

<script>
import ApiClient from "@/services/ApiClient.js";
import CommentList from "@/components/CommentList.vue";

export default {
  name: "ActuFull",
  components: {
    CommentList
  },
  props: {
    actuId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      actuData: null,
      imageData: null,
      ingredientsData: []
    };
  },
  methods: {
    getActuData() {
      // @todo Récupérer les informations en meta
      let actuRequest = ApiClient.get("/wp/v2/actus/" + this.actuId);

      actuRequest.then(response => {
        this.actuData = response.data;

        if (this.actuData.featured_media !== 0) {
          this.getImageData();
        }

        if (this.actuData["actu-ingredients"].length > 0) {
          this.getIngredientsData();
        }
      });
      actuRequest.catch(error => {
        console.error(error);
      });
    },
    getImageData() {
      let imageRequest = ApiClient.get(
        "/wp/v2/media/" + this.actuData.featured_media
      );

      imageRequest.then(response => {
        this.imageData = response.data;
      });
    },
    getIngredientsData() {
      let ingredientsRequest = ApiClient.get("/wp/v2/actu-ingredients", {
        params: {
          /**
           * Je récupère la liste des ingrédients uniquement liés à ma recette
           */
          include: this.actuData["actu-ingredients"]
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
    commentOpen() {
      return this.actuData.comment_status === "open";
    }
  },
  mounted() {
    this.getActuData();
  }
};
</script>

<style>
</style>
