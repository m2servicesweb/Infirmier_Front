<template>
  <footer class="px-3 py-8 bg-blue-900 text-2 text-white dark:text-white transition-colors duration-200">
    <div class="flex flex-col">
        <div class="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
        </div>
        <div class="mt-4 md:mt-0 flex flex-col md:flex-row">
            <nav class="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
                    Politique de confidentialité
                </a>
                <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
                    Mentions légales
                </a>
            </nav>
            <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full">
            </div>
            <div class="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                <a class="hover:text-primary-gray-20" href="https://www.facebook.com/sylvain.boutet.12">
                    <span class="sr-only">
                        View on Facebook
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                    </path>
                    </svg>
                </a>
                <a class="ml-4 hover:text-primary-gray-20" href="tel:+33663545946">
                    <span class="call-outline"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </a>
                <a class="ml-4 hover:text-primary-gray-20" href="mailto:sylvain-boutet@orange.fr">
                    <span class="mail-outline"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </a>
            </div>
            <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
            </div>
            <div class="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                <span class="">
                    © 2021
                </span>
                <span class="mt-7 md:mt-1">
                    Created by
                    <a class="underline hover:text-primary-gray-20" href="https://www.m2web.online">
                        M2Web
                    </a>
                </span>
            </div>
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