<template>
  <div id="app">
    <LoaderComponent v-bind:status="status" />

    <div class="buttonList">
      <ButtonComponent v-for="(link, id) in links" :key="id" :name="link.name" :emoji="link.emoji" :url="link.url" />
    </div>

    <div class="imageContainer">
      <ImageComponent v-if="selectedImage.url" :url="selectedImage.url" :name="selectedImage.name"/>
    </div>

  </div>
</template>

<script>
import LoaderComponent from './components/LoaderComponent.vue'
import ButtonComponent from './components/ButtonComponent.vue'
import ImageComponent from './components/ImageComponent.vue'
import store from '@/store'

export default {
  name: 'App',
  data: function(){
    return store.data;
  },
  components: {
    LoaderComponent,
    ButtonComponent,
    ImageComponent
  },
  mounted(){
    store.data.status = "hide"
  }

}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fcfeff;
}
.buttonList{
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 2%;
}
.imageContainer{
  display: flex;
  justify-content: center;
}
</style>
