<template>
  <div>
    <br>
    <h2>Photos</h2>
    <ul class="photos">
      <li v-for="(foto,id) in fotos" :key="id"><img :src="foto" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PhotosComponent',
  data: function(){
    return {
      fotos: [
        "http://lorempixel.com/400/300/food/1",
        "http://lorempixel.com/400/300/food/2",
        "http://lorempixel.com/400/300/food/3",
        "http://lorempixel.com/400/300/food/4",
        "http://lorempixel.com/400/300/food/5",
        "http://lorempixel.com/400/300/food/6",
        "http://lorempixel.com/400/300/food/7",
        "http://lorempixel.com/400/300/food/8",
        "http://lorempixel.com/400/300/food/9",

      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.photos
  list-style: none
  margin: 0
  padding: 0
  // background-color: red
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  // max-width: 1200px
  li
    padding: 0
    margin-bottom: 2%
    width: 32%
    // background-color: blue
    img
      width: 100%
</style>