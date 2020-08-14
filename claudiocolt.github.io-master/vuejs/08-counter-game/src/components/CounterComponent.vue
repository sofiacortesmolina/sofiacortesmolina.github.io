<template>
  <div>
    <h1>{{ title }}</h1>
    <h5>Clicks: <span>{{ clicks }}</span></h5>
    <button v-on:click="addCounter()" v-on:mouseover="addCounter()">Click Counter</button>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  data: function(){
    return {
      clicks: 0
    }
  },
  props: {
    title: String
  },
  methods: {
    addCounter: function(){
      this.clicks++;
      localStorage.setItem('ClicksCounter', this.clicks);
    }
  }
}
</script>

<style scoped>
</style>
