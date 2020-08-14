<template>  
  <div class="header">
    <div class="container">
      <h1>{{ titulo }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBox',
  props: {
    titulo: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #edf2f7;
}
h1 {
  padding: 0;
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  color: #4a5568;
}
</style>
