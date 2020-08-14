<template>
  <div class="hello">
    <h1>Sophie's List of Things to Learn</h1>
    <ul>
      <li v-for="item in lista" v-bind:key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MiLista',
  data: () => {
    return {
      lista: [
        'HTML',
        'CSS',
        'Vue',
        'Firebase',
      ]
    }
  },
  props: {
  },
}
</script>

<style scoped>
.hello{
  /* width: 400px; */
  margin: 0 auto;
  text-align: center;
}
.hello h1{
  color: black;
}
.hello ul{
  width: 200px;
  font-size: 1.6rem;
  margin: 0 auto;
  color: black;
  text-align: left;
}
</style>
