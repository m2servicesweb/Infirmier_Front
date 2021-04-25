<template>


  <div class="header">
    <nav class=" relative flex flex-wrap items-center justify-between px-2 py-1 navbar-expand-lg bg-blue-900">
  <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
  <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:justify-start">
    <p class="text-m text-white font-bold-400 text-xl">Suivi des patients et des prescriptions / Soins à domicile et en cabinet </p>
  </div>
  <div class= "w-full relative lg:flex block lg:justify-between lg:w-auto  px-4 lg:static lg:justify-start">
    <a class="text-m text-white font-bold-400 leading-relaxed inline-block mr-4 py-2  whitespace-no-wrap uppercase " href="tel:+33663545946">
      <ion-icon class="mr-4" name="call-outline"></ion-icon>06 63 54 59 46</a>
      <a class="text-m text-white font-bold-400 leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap" href="mailto:sylvain-boutet@orange.fr">
      <ion-icon class="mr-4" name="mail-outline"></ion-icon>sylvain-boutet@orange.fr</a>
    </div>
  </div>
</nav>

<nav class="shadow-2xl  relative flex flex-wrap items-center justify-between px-2 py-6 navbar-expand-lg bg-white-500 ">
  <div class="container px-4 mx-auto flex flex-wrap items-center justify-between ">
    <div class="w-full relative flex justify-between lg:w-auto  px-4 ">
      <ul>
      <li class="nav-item">
             <a href="/infirmier" to="/" class="text-m font-bold-400 leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase hover:underline hover:text-blue-900"><ion-icon  class="mr-4" name="home-outline"></ion-icon> Boutet Sylvain</a>
          </li>
      </ul>
      <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span class="block relative w-6 h-px rounded-sm bg-white"></span>
        <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div class=" flex-grow items-center lg:w-auto  px-4 flex float-right" id="example-navbar-warning">
       <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
      <a  href="/infirmier/soins-infirmiers" class="px-3 py-2 flex items-center text-s uppercase font-bold-400 leading-snug  hover:text-blue-900 hover:underline">
              Soins infirmiers</a>    
          </li>
          <li class="nav-item">
        
               <a href="/infirmier/a-domicile/" class="px-3 py-2 flex items-center text-s uppercase font-bold-400 leading-snug  hover:text-blue-900 hover:underline">
             à domicile</a>   
          </li>
            <li class="nav-item">
         <a href="/infirmier/contact" class="px-3 py-2 flex items-center text-s uppercase font-bold-400 leading-snug  hover:text-blue-900 hover:underline">
             contact</a>
          </li>
      </ul>
    </div>
  </div>
</nav>
<div class="bg-indigo-600">
<div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg bg-red-800">
          <!-- Heroicon name: outline/speakerphone -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </span>
        <p class="ml-3 font-medium text-blue truncate">
          <span class="md:hidden">
            Pharmacie de garde
          </span>
          <span class="hidden md:inline">
            Pharmacie de garde: Brive
          </span>
        </p>
      </div>
      <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <a href="#" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
          Urgence / 15
        </a>
      </div>
    </div>
  </div>
</div>
<nav class="bg-white shadow">
        <div class="container mx-auto px-6 py-3 ">
            <div class="md:flex md:items-center md:justify-between">
                <div class="flex justify-between items-center">
                    <div class="text-xl font-semibold text-gray-700">
                        <a href="#" class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Brand</a>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex md:hidden">
                        <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="hidden -mx-4 md:flex md:items-center">
                    <a href="#" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Web developers</a>
                    <a href="#" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Web Designers</a>
                    <a href="#" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">UI/UX Designers</a>
                    <a href="#" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://cdn.pixabay.com/photo/2017/08/10/03/30/stethoscope-2617701_960_720.jpg);">
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">Build Your new <span class="underline text-blue-400">Saas</span></h1>
                <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
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
    }
  }
  
};
</script>

<style>
</style>
