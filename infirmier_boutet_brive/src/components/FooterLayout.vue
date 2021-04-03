<template>
  <footer class="footer" v-bind:class="{ 'logo-only': userLoggedOut }">
    <RouterLink v-bind:to="{ name: 'Home' }"></RouterLink>
    <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl tracking-tight">L'art en Lien</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"><RouterLink v-bind:to="{ name: 'Home' }">Home</RouterLink></a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"><RouterLink v-bind:to="{ name: 'actu-home' }">Actualités</RouterLink></a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"><RouterLink v-bind:to="{ name: 'actu-home' }">Actualités</RouterLink></a>
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><RouterLink v-if="userLoggedOut" v-bind:to="{ name: 'Register' }">Inscription</RouterLink></a>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><RouterLink v-if="userLoggedOut" v-bind:to="{ name: 'Login' }">Connexion</RouterLink></a>
      </div>
    </div>
  </nav>
    <div class="user" v-if="userLoggedIn">
      <span class="username">{{ userDisplayName }}</span>
      <img
        class="avatar"
        src="../assets/avatar.png"
        v-on:click="toggleUserMenu()"
      />
      <div class="user-actions" v-show="userMenuVisible">
        <RouterLink v-bind:to="{ name: 'InviteFriend' }">Inviter un ami</RouterLink>
        <a v-on:click="disconnect()">Déconnexion</a>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "FooterLayout",
  // La propriété data doit être de type function et doit retourner un objet
  // data: function() {
  data() {
    return {
      userMenuVisible: false
    };
  },
  methods: {
    toggleUserMenu() {
      this.userMenuVisible = !this.userMenuVisible;
    },
    disconnect() {
      // J'exécute l'action disconnect du store
      this.$store.dispatch('disconnect');

      this.userMenuVisible = false;
    }
  },
  computed: {
    userLoggedIn() {
      // return this.$store.state.user !== null;
      return !!this.$store.state.user;
    },
    userLoggedOut() {
      return !this.userLoggedIn;
    },
    userDisplayName() {
      return this.$store.state.user.displayName;
    }
  }
};
</script>

<style>

</style>