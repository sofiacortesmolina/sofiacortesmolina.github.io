<template>  
  <div class="container">
    <div class="current">
      <p>Your Gold: </p><input type="text" v-model="gold">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoldBox',
  props: {
    gold: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.current{
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: darkmagenta; */
  padding: 60px 0 10px 0;
  /* border: 1px solid #edf2f7; */
}
.current p {
  margin: 0;
  padding: 0;
  font-size: 26px;
  
}
.current input{
  margin: 0;
  padding: 0;
  margin-left: 10px;
  background-color: #fffeed;
  border: 1px solid #bdc1d6;
  border-radius: 3px;
  font-size: 26px;
  height: 30px;
  line-height: 30px;
  width: 90px;
  text-align: center;
  margin-top: 2px;
  font-weight: 700;
}
</style>
