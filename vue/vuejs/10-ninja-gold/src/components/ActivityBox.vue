<template> 
  <div class="container">
    <div class="activity">
    
      <ul>
        <li v-for="(item, index) in activity" :key="index" v-html="item"></li>
      </ul>
    </div>

  </div>
</template>

<script>
// import store from '@/store';
export default {
  name: 'ActivityBox',
  props: {
    activity: Array
  }
}
</script>

<style scoped>
.activity{
  padding: 14px 0;
  background-color: #fcfeff;
  border: 24px solid #edf2f7;
  margin-top: 30px;
}
.activity ul{
  margin: 0;
  padding: 0 0 0 10px;
  list-style: none;
  font-size: 1.1rem;
  line-height: 1.4;
}
</style>
