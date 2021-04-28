<template>
    <html>
        <NavBar />
        <div class="min-h-screen bg-white flex">
        <div class="flex-1 flex flex-col justify-center items-start w-1/2 py-10 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
            <div>
                <img class="h-12 w-auto" src="" alt="">
                <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in 
                </h2>
            </div>
              <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">
               with
            </span>
          </div>
        </div>
               <div class="mt-6 grid grid-cols-1 gap-3">
          <div>
            <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Sign in with Google</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div class="relative mt-5">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

            <div class="mt-2">
                <div class="mt-6">
                <form action="#" method="POST" class="space-y-6">
                    <div>
                    <div class="mt-1">
                        <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Email">
                    </div>
                    </div>

                    <div class="space-y-1">
                    <div class="mt-1">
                        <input v-model="user.password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Password">
                    </div>
                    </div>

                    <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                        <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                        Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                        </a>
                    </div>
                    </div>

                    <div>
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="handleSubmit">
                        Sign in
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        <div class="mt-40 hidden lg:block relative w-0  flex-1">
            <img class=" inset-0  object-cover" src='@/assets/images/setup.jpg' alt="">
        </div>
        </div>
        <div class="">
            <Footer />
        </div>
    </html>
</template>

<script>
import NavBar from '@/components/Elements/NavBar.vue'
import Footer from '@/components/Elements/Footer.vue'
export default {
    name: 'SignIn',
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            user: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        handleSubmit() {
        // const payload = {
        //     email: this.email,
        //     password: this.password
        //     }
        // this.errors = []
        // this.error = false
        }
    }
}
</script>