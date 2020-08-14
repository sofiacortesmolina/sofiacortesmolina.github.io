<template>
  <div class="container">

    <h1>{{ $route.params.restaurant }} Page</h1>

    <router-link class="link" :to="{ name: 'about-restaurant', params: { restaurant: $route.params.restaurant }}">About</router-link>
    <router-link class="link" :to="{ name: 'photos-restaurant', params: { restaurant: $route.params.restaurant }}">Photos</router-link>
    <router-link class="link" :to="{ name: 'reviews-restaurant', params: { restaurant: $route.params.restaurant }}">Reviews</router-link>   

    <router-view />

  </div>
</template>

<script>
export default {
  name: 'RestaurantPage',
  data: function(){
    return {
      selected: '',
      submenu: [
        'About',
        'Photos',
        'Reviews'
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
div.container
  margin-top: 40px
.link
  background-color: #6bc59d
  padding: 4px 14px
  border-radius: 3px
  font-size: 14px
  text-decoration: none
  color: white
  margin: 0 6px
.btn-login
  background-color: green
  padding: 8px 16px
  border-radius: 3px
  font-size: 14px
  text-decoration: none
  color: white
.sub-menu
  padding: 0
  margin: 0
  list-style: none
  display: flex
  justify-content: center
  li
    padding: 0
    margin: 0 10px
</style>