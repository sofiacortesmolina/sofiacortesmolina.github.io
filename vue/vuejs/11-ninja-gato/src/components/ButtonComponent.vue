<template>
  <Button v-on:click="clickButton(name, url)" v-html="emoji + ' ' + name"></Button>
</template>

<script>
import store from '@/store'
export default {
  name: 'ImageComponent',
  props: {
    name: String,
    emoji: String,
    url: String
  },
  methods: {
    clickButton: function(name, url){
      store.data.status = "show";
      store.setImage(name, url);
    }
  },
}
</script>


<style scoped>
button{
  margin: 8px;
  font-size: 24px;
  font-weight: 600;
  padding: 10px 30px;
  background-color: #c9d6e2;
  border: 1px solid #75899a;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
}
button:hover{
  background-color: #dae3ec;
}
button:active{
  background-color: #bdcad6;
}
</style>
