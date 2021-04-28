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
        <div class="mt-6 grid grid-cols-1 gap-3 cursor-pointer">
            <div class="google-btn"  @click="googleSignIn">
                <div class="google-icon-wrapper">
                    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p class="btn-text"><b>Sign in with google</b></p>
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
                <form class="space-y-6">
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
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="handleSubmit">
                        Sign in
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        <div class="mt-64 hidden lg:block relative w-0  flex-1">
            <img class=" inset-0  object-cover" src='https://img.freepik.com/free-vector/illustration-human-avatar-with-environment_53876-17627.jpg?size=626&ext=jpg' alt="">
        </div>
        </div>
        <div class="">
            <Footer />
        </div>
    </html>
</template>

<script>
import  firebase from '@firebase/app';
import 'firebase/auth';
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
                email: "dummyemail@institute.com",
                password: "letmepass"
            },
            error: ""
        }
    },
    methods: {
       async submit(){
        console.log(this.user.email)
        console.log(this.user.password)
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(5000);
        //setTimeout(function(){ this.show = false; }, 10000);
        this.user.email= ''
        this.user.password = ''
        alert('Signed In')
        },

        
         googleSignIn: function() {
             var provider = new firebase.auth.GoogleAuthProvider();
             firebase.auth()
                    .signInWithPopup(provider)
                    .then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    var credential = result.credential;
                    console.log(credential)
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    console.log(error)
                    // ...
                    })
         }          
    }
}
</script>


<style scoped>
.google-btn {
  width: 184px;
  height: 42px;
  background-color:#4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  margin: auto;
  width: 50%;
}
  .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: white;
  }
  .google-icon {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    float: right;
    margin: 11px 11px 0 0;
    color: white;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
  }
  .btn-text:hover {
    box-shadow: 0 0 6px #4285f4;
  }
  .btn-text:active {
    background: #1669F2;
  }
</style>