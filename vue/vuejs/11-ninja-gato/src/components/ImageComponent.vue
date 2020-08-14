<template>
  <div class="image">
    <img v-bind:src="url" v-bind:alt="name" v-bind:title="name">
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'ImageComponent',
  props: {
    url: String,
    name: String
  },
  mounted(){
    
    setTimeout(function(){
      store.data.status = "hide";
    }, 500);

  },
  beforeUpdate(){
    alert("se está cambiando de imagen");
  },
  updated(){
    
    setTimeout(function(){
      store.data.status = "hide";
    }, 500);

  }
}
</script>


<style scoped>
.image{
  width: 500px;
}
.image img{
  width: 100%;
}
</style>
