<template> 
  <div class="container">


    <div class="reset">
      <button v-on:click="reset">Reset</button>
    </div>

    <div class="activity">    
      <ul>
        <li v-for="(item, id) in activity" :key="id" :class="item.color" v-html="item.texto"></li>
      </ul>
    </div>
    
    

  </div>
</template>

<script>
import store from '@/store';
export default {
  name: 'ActivityBox',
  props: {
    activity: Array,
  },
  methods: {
    reset: function(){
      store.resetGold();
    }
  }
}
</script>

<style scoped>
.activity{
  padding: 14px 0;
  background-color: #fcfeff;
  border: 24px solid #edf2f7;
}
.activity ul{
  margin: 0;
  padding: 0 0 0 10px;
  list-style: none;
  font-size: 1.1rem;
  line-height: 1.4;
}
.activity .red{
  color: #e64747;
}
.activity .blue{
  color: #50509e;
}
.activity .gray{
  color: #676767;
}

.reset{
  background-color: #dee6ef;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-top: 30px;
}
.reset button{
  background-color: #8c9db1;
  border-radius: 2px;
  border: 1px solid #6c839c;
  padding: 5px 32px;
  font-size: 1.1rem;
  outline: none;
  cursor: pointer;
  color: white;
}
.reset button:hover{
  background-color: #9cadc1;
}
.reset button:active{
  background-color: #7f90a5;
}
</style>
