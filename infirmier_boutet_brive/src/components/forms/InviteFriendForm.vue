<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="field">
      <label class="field__label">Adresse e-mail de votre ami</label>
      <input
        class="field__input"
        type="text"
        placeholder="johndoe@ogame.local"
        v-model="email"
      />
    </div>
    <div v-for="(error, index) in errors" v-bind:key="index" class="alert error">{{ error }}</div>
    <button type="submit" class="button">Inviter</button>
  </form>
</template>

<script>
import ApiClient from "@/services/ApiClient.js";

export default {
  name: "InviteFriendForm",
  data() {
    return {
      email: null,
      errors: []
    };
  },
  methods: {
    onSubmit() {
      if (this.isValidForm()) {
        let inviteFriendRequest = ApiClient.post("/ogame/v1/invite-friend", {
          email: this.email
        });

        inviteFriendRequest.then(() => {
          this.$store.dispatch("notify", {
            message: "L'invitation a été envoyée.",
            status: "success"
          });
        });

        inviteFriendRequest.catch(() => {
          this.errors.push("Nous avons recontré des erreurs lors du traitement de votre demande.");
        });
      }
    },
    isValidForm() {
      this.errors = [];

      if (! this.email) {
        this.errors.push("L'adresse e-mail de votre ami est obligatoire.");
      } else {
        let email = String(this.email);

        if (! email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
          this.errors.push("L'adresse e-mail de votre ami n'est pas valide.");
        }
      }

      let isValidForm = this.errors.length === 0;

      return isValidForm;
    }
  }
};
</script>
