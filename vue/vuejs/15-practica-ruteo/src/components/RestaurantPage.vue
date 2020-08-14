<template>
  <div class="container">
    <h1>{{ $route.params.restaurant }} Page</h1>
    <br>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis saepe explicabo repellat corrupti molestias quidem tempore a ex distinctio officiis maxime officia cupiditate, rerum incidunt necessitatibus minima id eum vel.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis saepe explicabo repellat corrupti molestias quidem tempore a ex distinctio officiis maxime officia cupiditate, rerum incidunt necessitatibus minima id eum vel. Veritatis saepe explicabo repellat corrupti molestias quidem tempore a ex distinctio officiis maxime officia cupiditate.</p>
    
    <br>
    <br>
    <router-link class="btn-login" :to="{ name: 'Login' }">Escribir una Reseña</router-link>

  </div>
</template>

<script>
export default {
  name: 'RestaurantPage',
}
</script>
<style lang="sass" scoped>
.btn-login
  background-color: green
  padding: 8px 16px
  border-radius: 3px
  font-size: 14px
  text-decoration: none
  color: white
</style>