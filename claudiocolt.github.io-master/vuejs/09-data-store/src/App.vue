<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-bind:timesClicked="timesClicked" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import store from '@/store';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function(){
    return store.state;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  width: 100px;
}
</style>
