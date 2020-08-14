<template>
  <div id="app">

    <HeaderBox v-bind:titulo="titulo" />

    <GoldBox v-bind:gold="gold" />

    <div class="container locations">
      <LocationBox v-for="(item, index) in locations" :key="index" :name="item.name" :text="item.text" :start="item.start" :end="item.end" />
    </div>

    <ActivityBox v-if="activity.length" v-bind:activity="activity"/>

  </div>
</template>

<script>

import HeaderBox from './components/HeaderBox.vue';
import GoldBox from './components/GoldBox.vue';
import LocationBox from './components/LocationBox.vue';
import ActivityBox from './components/ActivityBox.vue';
import store from '@/store';

export default {
  name: 'App',
  data: function(){
    return store.data;
  },
  components: {
    HeaderBox,
    GoldBox,
    LocationBox,
    ActivityBox
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
#app {
  background-color: #fcfeff;
}
.container{
  max-width: 1000px;
  margin: 0 auto;
  /* border-left: 1px dashed red; */
  /* border-right: 1px dashed red; */
}
.locations{
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}
</style>
