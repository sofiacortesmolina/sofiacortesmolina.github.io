<template>
  <div id="app">
    <PageTitle title="Sophie's List of Things to Learn"/>
    <ThingsList title="Tech" :items="['HTML', 'CSS', 'Vue', 'Firebase']" />
    <ThingsList title="Financial" :items="['Investing', 'Budgeting', 'Balancing a Checkbook']" />
  </div>
</template>

<script>
import PageTitle from './components/PageTitle.vue'
import ThingsList from './components/ThingsList.vue'

export default {
  name: 'App',
  components: {
    PageTitle,
    ThingsList
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
</style>
