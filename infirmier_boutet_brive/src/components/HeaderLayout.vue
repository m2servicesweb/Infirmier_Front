<template>
  <div class="bg-blue-800 py-4 px-2 lg:mx-4 xl:mx-0">
    <div class="">
      <nav class="flex items-center justify-between flex-wrap">
        <div class="text-white mr-6">
          <RouterLink v-bind:to="{ name: 'Home' }">
            <img src="../assets/Logo_Sylvain.gif" alt="" class="h-12 xl:h-12  mx-20 block lg:inline-block border-solid border-4 rounded-lg">
            <a href="#" class="block lg:inline-block text-md font-bold  text-white hover:text-orange-500 rounded-lg">BOUTET SYLVAIN</a>
          </RouterLink>
        </div>
        <div class="block lg:hidden">
          <button class="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-orange-500 hover:border-white">
            <svg class="fill-current h-6 w-6 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div id="main-nav" class="w-full flex-end lg:flex items-center lg:w-auto hidden">
          <div class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
            <RouterLink v-bind:to="{ name: 'soin-home' }">
              <a href="#" class="block lg:inline-block text-md font-bold  text-white  sm:hover:border-indigo-400  hover:text-orange-500 mx-2  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">SOINS INFIRMIERS</a>
            </RouterLink>
            <RouterLink v-bind:to="{ name: 'Domicile' }">
              <a href="#" class="block lg:inline-block text-md font-bold  text-white  sm:hover:border-indigo-400  hover:text-orange-500 mx-2  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg uppercase">à domicile</a>
              </RouterLink>
              <RouterLink v-bind:to="{ name: 'Contact' }">
              <a href="#" class="block lg:inline-block text-md font-bold  text-white  sm:hover:border-indigo-400  hover:text-orange-500 mx-2  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">CONTACT</a></RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  
  name: "HeaderLayout",
  computed: {
    userLoggedIn() {
      // return this.$store.state.user !== null;
      return !!this.$store.state.user;
    },
    userLoggedOut() {
      return !this.userLoggedIn;
    },
    
  }
  
};
// Navbar Toggle
document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the "main-nav" element
          var $target = document.getElementById('main-nav');
  
          // Toggle the class on "main-nav"
          $target.classList.toggle('hidden');
  
        });
      });
    }
  
  });
</script>

<style>
</style>
