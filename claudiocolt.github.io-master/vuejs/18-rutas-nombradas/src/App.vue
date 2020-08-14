<template>
  <div id="app">
    <router-link class="link-home" :to="{ name: 'Welcome'}">🏠 Página Inicio</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  max-width: 700px;
  margin: 0 auto;
}
.link-home{
  display: block;
  background-color: #41b883;
  text-decoration: none;
  color: #35495e;
  font-size: 14px;
  height: 30px;
  line-height: 32px;
  color: white;
  font-weight: 500;
}
</style>
