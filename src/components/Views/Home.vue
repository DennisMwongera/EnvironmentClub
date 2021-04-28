<template>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Open Institute Enviroment Club</title>
</head>
<body>
  <!-- NavBar section -->
  <NavBar />

  <!-- Hero Section -->
  <HeroSection />

  <!-- Info Section -->
  <InfoSection  />

  <!--Partners-->
  <Partners />

  <!--Footer-->
  <Footer />

</body>
</html>
</template>

<script>
import NavBar from '../Elements/NavBar.vue'
import HeroSection from '../Elements/HeroSection.vue'
import InfoSection from '../Elements/InfoSection.vue'
import Partners from '../Elements/Partners.vue'
import Footer from '../Elements/Footer.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    HeroSection,
    InfoSection,
    Partners,
    Footer

  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
