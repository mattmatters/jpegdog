<template>
  <div id="app">
    <h1>JPEG Dog</h1>
    <img alt="Not a jpeg" src="./assets/notjpegdog.png">
    <p>A celebration of all jpeg dogs.</p>
    <Gallery />
    <Footer />
  </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 import Gallery from './components/Gallery.vue';
 import Footer from './components/Footer.vue';

 @Component({
     components: {
         Gallery,
         Footer,
     },
 })
 export default class App extends Vue {}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
