<template>  
  <div v-bind:class="['location', locationClass]">
    <div v-bind:class="['image', locationClass]"></div>
    <b>{{ name }}</b>
    <span>{{ text }}</span>
    <button class="btn-find" v-on:click="clickFind()">Find Gold!</button>
  </div>
</template>

<script>
import store from '@/store';
export default {
  name: 'LocationBox',
  props: {
    name: String,
    text: String,
    start: Number,
    end: Number
  },  
  computed: {
    locationClass: function() {
      return this.name.toLowerCase();
    }
  },
  methods: {
    clickFind: function(){
      store.findGold(this.start, this.end, this.name);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.location{
  width: 20%;
  background-color: #fffaec;
  padding: 1%;
  text-align: center;
  border: 1px solid #e8d99d;
  border-radius: 2px;
}
.location b{
  display: block;
  font-size: 1.2rem;
  margin-top: 2px;
}
.location span{
  display: block;
  margin-top: 4px;
}
.location.farm{
  color: #80572d;
  background-color: #ffe5c2;
  border: 1px solid #e0b992;
}
.location.cave{
  color: #5f577a;
  background-color: #cdc5ea;
  border: 1px solid #aca3d0;
}
.location.house{
  color: #4d6930;
  background-color: #c5e6a1;
  border: 1px solid #a8bb93;
}
.location.casino{
  color: #4b6669;
  background-color: #cbe1e2;
  border: 1px solid #a4b8b9;
}

.location .btn-find{
  background-color: #ffec7b;
  border-radius: 2px;
  border: 1px solid #a59749;
  padding: 10px 20px;
  font-size: 1.3rem;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
}
.location .btn-find:hover{
  background-color: #fff2a9;
}
.location .btn-find:active{
  background-color: #f3e388;
}

.location .image{
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
.location .image.farm{
  background-image: url('../assets/field.png');
}
.location .image.house{
  background-image: url('../assets/garden.png');
}
.location .image.casino{
  background-image: url('../assets/slot-machine.png');
}
.location .image.cave{
  background-image: url('../assets/cave.png');
}

</style>
