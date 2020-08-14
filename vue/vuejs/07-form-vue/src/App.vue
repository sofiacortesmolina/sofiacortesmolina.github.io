<template>
  <div id="app" class="h-screen w-full bg-gray-200 flex flex-col items-center relative">
    <SurveyDojo />
  </div>
</template>

<script>
import SurveyDojo from './components/SurveyDojo.vue'

export default {
  name: 'App',
  data: () => {
    return {
      nombreLogo: "logo"
    }    
  },
  components: {
    SurveyDojo
  }
}
</script>

<style>
</style>
