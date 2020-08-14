<template>
  <div class="relative">
  
    <form v-on:submit.prevent="onSubmit" class="rounded shadow-lg p-6 bg-white mt-32" style="width: 320px;">
      
      <img src="../assets/logo.png" alt="" class="w-24 m-auto mb-4">

      <div class="flex flex-wrap">
        <div class="w-full">
          <label class="block text-gray-700 text-xs font-semibold mb-1" for="grid-first-name">Nombre Alumno</label>
          <input required v-model="nombre" class="appearance-none block w-full bg-gray-200 text-gray-700 text-xs font-semibold border rounded py-2 px-3 leading-tight focus:bg-white focus:outline-none focus:border-gray-500" type="text" placeholder="Tu Nombre">
        </div>
      </div>

      <div class="flex flex-wrap mt-2">
        <div class="w-full">
          <label class="block text-gray-700 text-xs font-semibold mb-1" for="sel-ciudades">Localidad del Dojo</label>
          <div class="relative">
            <select required v-model="ciudad" class="block text-xs font-semibold appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="sel-ciudades">
              <option>Santiago, Chile</option>
              <option>Auckland, New Zealand</option>
              <option>New York, USA</option>
              <option>Helsinki, Finland</option>
              <option>Warsaw, Poland</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap mt-2">
        <div class="w-full">
          <label class="block text-gray-700 text-xs font-semibold mb-1" for="sel-lenguajes">Lenguaje de Preferencia</label>
          <div class="relative">
            <select required id="sel-lenguajes" v-model="lenguaje" class="block text-xs font-semibold appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Javascript</option>
              <option>PHP</option>
              <option>Python</option>
              <option>Ruby</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap mt-2">
        <div class="w-full">
          <label class="block text-gray-700 text-xs font-semibold mb-1" for="sel-lenguajes">Comentario</label>
          <div class="relative">
            <textarea name="" class="bg-gray-200 text-gray-700 text-xs w-full font-semibold border rounded py-2 px-3 leading-tight focus:bg-white focus:outline-none focus:border-gray-500" placeholder="Tu Comentario"></textarea>
          </div>
        </div>
      </div>

      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold mt-2 py-2 px-3 rounded">
        Enviar
      </button>

    </form>

  </div>
</template>

<script>
export default {
  name: 'SurveyDojo',
  props: {
  },
  data: () => {
    return {
      nombre: "",
      ciudad: "",
      lenguaje: "",
    }    
  }
}
</script>

<style scoped>
</style>
