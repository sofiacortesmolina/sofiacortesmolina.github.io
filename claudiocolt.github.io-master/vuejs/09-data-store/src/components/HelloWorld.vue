<template>
  <div class="hello">
    <h1>{{ timesClicked }}</h1>
    <button v-on:click="someFunc()">Click Me!</button>
  </div>
</template>

<script>
import store from '@/store';
export default {
  name: 'HelloWorld',
  props: {
    timesClicked: Number
  },  
  methods: {
    someFunc: function(){
      store.incrementTimesClicked();
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
