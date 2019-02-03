<template>
  <div>
    <transition name="fade">
      <div v-if="!images || !images.length" class="spinner">
        <looping-rhombuses-spinner
            :animation-duration="2500"
            :rhombus-size="15"
            color="#2c3e50"
        />
      </div>
      <ul v-else>
        <li v-for="(image, idx) in images" :key="image.src.small">
          <div>
            <img :src=image.src.small />
            <p>{{image.photographer}}</p>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
 import { Component, Prop, Vue } from 'vue-property-decorator';
 import { LoopingRhombusesSpinner } from 'epic-spinners';
 import { getPhotos, Photo} from '../photos';


 const API_URL: string = 'https://api.jpeg.dog/images';

 @Component({
     components: {
         LoopingRhombusesSpinner,
     },
 })
 export default class Gallery extends Vue {
     private images: Photo[] = [];

     private async mounted() {
         const { data } = await getPhotos();
         this.images = data;
     }
 }
</script>

<style scoped lang="stylus">
 .spinner
   display flex
   justify-content center
   text-align center

 ul
   list-style-type none
   padding 0
   display flex;
   flex-wrap wrap;
   justify-content space-around;

 .fade-enter-active, .fade-leave-active
   transition opacity .5s;

 .fade-enter, .fade-leave-to
  opacity 0;
</style>
