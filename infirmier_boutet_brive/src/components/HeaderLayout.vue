<template>


  <div class="header">
<div>
<div class="py-4 px-2 lg:mx-4 xl:mx-12">
            <div class="">
                <nav class="flex items-center justify-between flex-wrap">
                    <div class="flex items-center flex-no-shrink text-white mr-6 ">
                        <img src="../assets/symbole-medical-caducee-de-deux-serpents-ascendants-sur-une-canne-avec-des-ailes.svg" alt="" class="h-12 xl:h-20  mr-2  ">
                    </div>
                    <div class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                      <RouterLink v-bind:to="{ name: 'Home' }">
                    <a href="#"
                                class="block lg:inline-block text-md font-bold  text-blue-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                BOUTET SYLVAIN
                            </a>
                            </RouterLink>
                    </div>
                    <div class="block lg:hidden">
                        <button
                            class="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                            <svg class="fill-current h-6 w-6 text-gray-700" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div id="main-nav" class="w-full flex-end lg:flex items-center lg:w-auto hidden  ">
                        <div class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                          <RouterLink v-bind:to="{ name: 'actu-home' }">
                            <a href="#"
                                class="block lg:inline-block text-md font-bold  text-blue-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                SOINS INFIRMIERS
                            </a>
                            </RouterLink>
                            <a href="#home"
                                class="block lg:inline-block text-md font-bold  text-blue-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg uppercase">
                                à domicile
                            </a>
                            <a href="#home"
                                class="block lg:inline-block text-md font-bold  text-blue-900  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                CONTACT
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
<div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://cdn.pixabay.com/photo/2017/08/10/03/30/stethoscope-2617701_960_720.jpg);">
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">Cabinet infirmier à Brive la Gaillarde </h1>
                <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"><a class="#" href="tel:+33663545946">
                    <span class="call-outline"></span>
                    <div class="px-12"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg></div>
                </a>
                <div class="">06 63 54 59 46</div>
                </button><br>
                <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"><a class="#" href="mailto:sylvain-boutet@orange.fr">
                    <span class="mail-outline"></span>
                    <div class="px-20"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg></div>
                </a>
                <div class="">sylvain-boutet@orange.fr</div>
                </button>
            </div>
        </div>
    </div>
    </div>

<div class="bg-blue-900">
<div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg bg-orange-500">
          <!-- Heroicon name: outline/speakerphone -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </span>
        <p class="ml-3 font-medium text-white truncate">
          <span class="md:hidden">
            Pharmacie de garde
          </span>
          <span class="hidden md:inline">
            Pharmacie de garde: Brive
          </span>
        </p>
      </div>
      <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <a href="tel:+33555926009" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-indigo-50">
          <span class="call-outline">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
          </span>
          <div class="px-4">En cas d'urgence</div>
        </a>
      </div>
    </div>
  </div>
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
