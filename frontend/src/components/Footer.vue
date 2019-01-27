<template>
    <div>
        <p>Photos provided by <a href="https://www.pexels.com/">Pexels</a></p>
        <p>Made by <a href="https://mattmatters.io">Matt Lewis</a></p>
        <p>Stuff <a href="https://gitlab.com/mattmatters/jpegdog"><font-awesome-icon icon="gitlab"></font-awesome-icon></a></p>
    </div>
</template>

<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';

 @Component
 export default class Footer extends Vue {}
</script>

<style scoped lang="stylus">
 div
   text-align center
</style>
