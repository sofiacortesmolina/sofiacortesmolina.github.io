<template>
  <div v-bind:class="['loader', status]">     
    <div class="loader-spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'LoaderComponent',
  props: {
    status: String
  }
}
</script>

<style scoped>
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.loader{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  visibility: hidden;
  transition: all .1s ease-in-out;
}
.loader.show{
  background: rgba(0, 0, 0, 0.5);
  visibility: visible;
}

.loader .loader-spinner{
  margin: 0 auto;
  height: 40px;
  width: 40px;
  animation: rotate 0.8s infinite linear;
  border: 6px solid #fff;
  border-right-color: transparent;
  border-radius: 50%;
  z-index: 901;
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -10px;
  margin-top: -10px;
}
</style>
