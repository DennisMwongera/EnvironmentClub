<template>
    <html>
        <!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white">
  <!-- Header -->
  <div class="relative pb-32 bg-gray-800">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" src="https://images.pexels.com/photos/1230157/pexels-photo-1230157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" style="height:40vh" alt="">
      <div class="absolute inset-0 bg-gray-800" style="mix-blend-mode: multiply;" aria-hidden="true"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-32 px-4 sm:py-32 sm:px-6 lg:px-8">
      <!-- <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Support</h1>
      <p class="mt-6 max-w-3xl text-xl text-gray-300">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.</p> -->
    </div>
  </div>

  <!-- Overlapping cards -->
  <section class="-mt-20 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 class="sr-only" id="contact-heading"></h2>
    <div class="grid grid-cols-1 gap-y-0 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-y-0 lg:gap-x-8 p-8">
        <!--Card 1-->
          <div class="rounded overflow-hidden shadow-lg">
            <img class="w-full" src="https://images.pexels.com/photos/6476851/pexels-photo-6476851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Zanzibar">
                 <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Zanzibar Tour</div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
        </div>
                    <!--Card 2-->
            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://images.pexels.com/photos/6476851/pexels-photo-6476851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Zanzibar">
                   <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">Slave Trade Tour</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
                    </div>
            </div>
                    <!--Card 3-->
            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="http://st2.depositphotos.com/1043178/11519/i/450/depositphotos_115192268-One-of-the-cleanest-cities-in-Africa-Kigali.jpg" alt="Kigali">
                    <div class="px-6 py-4">
                       <div class="font-bold text-xl mb-2">Nyerere Tour</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                    </div>
            </div>
                    <!--Card 4-->
            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="http://st2.depositphotos.com/1043178/11519/i/450/depositphotos_115192268-One-of-the-cleanest-cities-in-Africa-Kigali.jpg" alt="Kigali">
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">Kigali Tour</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                    </div>
            </div>
        </div>
  </section>
</div>

   </html>
</template>

<script>
export default {
    name: 'HeroSection'
}
</script>

<style scoped>
.content-div .img-box::before {
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.699);
	display: inline-block;
	transform: scaleY(0);
	transform-origin: 0 0 0;
	transition: all 0.4s ease-in-out 0s;
	opacity: 0;
    border-radius: 2%;
}
.content-div:hover .img-box::before {
	opacity: 1;
	transform: scaleY(1);
	visibility: visible;
}
.mag-view-box {
	position: absolute;
	top: -10%;
	left: 0;
	right: 0;
    transform: translate(0, -50%);
	padding: 0 28px;
    transition: all 1s ease 0s;
    
}

.content-div:hover .mag-view-box {
	top: 50%;
}
.content-div{
  /* background-image:url('../assets/img/cover.png'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
  height: 100%;
}
  
 .image-cover {
      height: 400px;
      width: 100%;
    } 
</style>