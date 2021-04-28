<template>
    <html>
        <nav class="w-full absolute z-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                   <!-- <router-link to="/"><img class="h-8 w-auto" src="" alt="Logo"></router-link> -->
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>

                    <router-link to='/programlist'><a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium">Programmes</a></router-link>

                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium">Cohorts</a>

                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-900 focus:text-white px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
                    </div>
                </div>
                </div>
            <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6 lg:ml-6"> 
                  <div class="guest inline-flex" data-toggle="modal" data-target="#md-login">
                    <div class="px-2">
						<router-link to="/signin"><a class="relative inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-green-700 shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign In </a></router-link>
                    </div>
                    <div class="px-2">
                        <router-link to="/register"><a class="relative inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-green-700 shadow-sm hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</a></router-link>
                    </div>
                  </div>    
                </div>
            </div>
             <div class="-mr-2 flex md:hidden" >
                <!-- Mobile menu button -->
                <button v-if="menuBtn" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" v-on:click="showMenu">
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <button v-if="closeBtn" v-on:click="close" class="flex justify-end"><svg class="z-20 mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button>
             </div>
            </div>
            </div>

            <!--
            Mobile menu, toggle classes based on menu state.

            Open: "block", closed: "hidden"
            -->
            <div v-if="mobileMenu" class="md:hidden absolute z-10 w-full bg-green-700">
              <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">About</a>

                <a href="#" class="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Programmes</a>

                <a href="#" class="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cohorts</a>

                <a href="#" class="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</a>

                <a v-on:click="LoginTrue = true" href="#" class="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Register</a>
             </div>
          </div>
        </nav>
    </html>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return{
      isHidden: false,
      mobileMenu: false,
      menuBar: true,
      menuBtn: true,
      closeBtn: false,
        }
    },
    methods: {
        showMenu() {
          this.mobileMenu = true
          this.closeBtn = true
          this.menuBtn = false
        },
        imgShow() {
            this.showImage = true
        },
        close() {
          this.menuBtn = true
          this.closeBtn = false
          this.mobileMenu = false
        }
    }
}
</script>