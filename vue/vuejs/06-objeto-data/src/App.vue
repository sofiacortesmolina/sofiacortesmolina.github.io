<template>
  <div id="app">
    <PageTitle title="Sophie's List of Things to Learn"/>
    <ThingsList title="Tech" :items="techList" />
    <ThingsList title="Financial" :items="finList" />
  </div>
</template>

<script>
import PageTitle from './components/PageTitle.vue'
import ThingsList from './components/ThingsList.vue'

export default {
  name: 'App',
  data: () => {
    return {
      techList: ['HTML', 'CSS', 'Vue', 'Firebase'],
      finList: ['Investing', 'Budgeting', 'Balancing a Checkbook'],
    }    
  },
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
