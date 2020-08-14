<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>    
      <li v-for="(item, id) in items" :key="id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ThingsList',
  props: {
    title: String,
    items: Array
  }
}
</script>

<style scoped>
div{
  width: 400px;
  margin: 0 auto;
  text-align: left;
}
h3{
  color: black;
}
ul{
  width: 200px;
  font-size: 1.2rem;
  margin: 0;
  color: black;
  text-align: left;
}
ul li{
  padding: 0;
  margin: 0;
}
</style>
