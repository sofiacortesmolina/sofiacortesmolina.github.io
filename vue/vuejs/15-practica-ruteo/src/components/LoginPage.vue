<template>
  <div class="container">

    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Login to DojoReviews</h1>
    <form action="">
      <div>
        <input type="text">
      </div>
      <div>
        <input type="password" name="" id="">
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>
<style lang="sass" scoped>
img
  width: 130px
  margin-top: 50px
form
  padding: 30px 10px 20px 10px
  width: 300px
  margin: 0 auto
  background-color: #fbfbfb
  border: 1px solid #e2e2e2
  border-radius: 2px
  color: #35495e
  // &:hover
    // color: #41b883

  input
    font-size: 20px
    width: 180px
    margin-bottom: 10px
  button
    width: 190px
    padding: 8px 0
    font-size: 14px
    background-color: #41b883
    border: 1px solid #41b883
    border-radius: 2px
    font-weight: 600
    color: #35495e
</style>