<template>  
  <div class="container">
    <div class="current">
      <p>Your Gold: </p><input type="text" v-model="gold" v-bind:class="goldColor">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoldBox',
  props: {
    gold: Number
  },
  computed: {
    goldColor: function(){

      let textClass = '';
      
      if(this.gold > 0){
        textClass = 'blue';
      } else if(this.gold < 0){
        textClass = 'red';
      } else {
        textClass = 'grey';
      }

      return textClass;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.current{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0 10px 0;
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
  background-color: #f4f5f7;
  border: 1px solid #c5c7d4;
  color: #8c909c;
  border-radius: 3px;
  font-size: 26px;
  height: 30px;
  line-height: 30px;
  width: 90px;
  text-align: center;
  margin-top: 2px;
  font-weight: 700;
}
.current input.blue{
  color: #3636c1;
  background-color: #f1f8ff;
  border: 1px solid #3a83cc;
}
.current input.red{
  color: #e64747;
  background-color: #fff0f0;
  border: 1px solid #e6a8af;
}
.current input.gray{
  background-color: #f4f5f7;
  border: 1px solid #c5c7d4;
  color: #8c909c;
}

</style>
