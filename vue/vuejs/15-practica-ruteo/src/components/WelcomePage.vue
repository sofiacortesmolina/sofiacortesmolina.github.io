<template>
  <div class="container">
    <h1>Welcome to DojoReviews</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li v-for="(item, id) in store.tipos" :key="id">
        <router-link :class="sizeClass(item.size)" :to="{ name: 'Category', params: { id: item.id } }">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>



<script>
import store from '@/store';
export default {
  name: 'WelcomePage',
  data: function(){
    return {
      store
    }
  },
  methods: {
    sizeClass: function(size){
      return `size-${size}`;
    }
  }
}
</script>

<style lang="sass" scoped>
img
  width: 130px
  margin-top: 20px
ul
  list-style: none
  margin: 0
  margin-top: 30px
  padding: 4px
  text-align: center
  display: flex
  justify-content: center
  flex-wrap: wrap
  li
    padding: 0
    margin: 0
    margin: 0 14px
    a
      display: block
      text-decoration: none
      color: #35495e
      font-size: 20px
      line-height: 36px
      height: 36px
      &.size-1
        font-size: 14px
      &.size-2
        font-size: 18px
      &.size-3
        font-size: 22px
      &.size-4
        font-size: 26px
      &:hover
        color: #41b883

</style>