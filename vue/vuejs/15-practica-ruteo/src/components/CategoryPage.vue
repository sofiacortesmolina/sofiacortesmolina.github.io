<template>
  <div class="container">
    <h1>Category: {{ selected }}</h1>
    <hr>
    <h3>Restaurantes Relacionados</h3>
    <ul>
      <li v-for="(restaurant, id) in store.restaurants" :key="id">
        <router-link :to="{ name: 'Restaurant', params: { restaurant: restaurant.name }}">{{ restaurant.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store';
export default {
  name: 'CategoryPage',
  props: {
    id: Number
  },
  data: function(){
    return {
      store,
      selected: ''
    }
  },
  mounted: function(){
    
    let array_filter  = store.tipos.filter(x => x.id == this.$route.params.id);

    this.selected     = array_filter[0].name;
    

  }
}
</script>

<style lang="sass" scoped>
h3
  margin: 40px 0 0 0
  padding: 0
  text-align: left
ul
  margin: 0
  padding: 0
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
  margin-left: 30px
  margin-top: 20px
  li
    height: 28px
    line-height: 28px
    font-size: 18px
    a
      display: block
      text-decoration: none
      color: #35495e
      &:hover
        color: #41b883
</style>