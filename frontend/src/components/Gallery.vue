<template>
    <ul>
        <li v-for="image in images">
            <div>
                <img :src=image.src.small />
                <p>{{image.photographer}}</p>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
 import { Component, Prop, Vue } from 'vue-property-decorator';
 import axios from 'axios';

 interface PhotoSrc {
     original: string;
     large2x: string;
     large: string;
     medium: string;
     small: string;
     portrait: string;
     square: string;
     landscape: string;
     tiny: string;
 }

 interface Photo {
     id: number;
     width: number;
     height: number;
     photographer: string;
     photographer_url: string;
     src: PhotoSrc;
 }

 const API_URL: string = 'http://localhost:3000/images';

 @Component
 export default class Gallery extends Vue {
     private images: Photo[] = [];

     private async mounted() {
         const { data } = await axios.get<Photo[]>(API_URL);
         this.images = data;
     }
 }
</script>

<style scoped lang="stylus">
 ul
   list-style-type none
   padding 0
   display flex;
   flex-wrap wrap;
   justify-content space-around;
</style>
