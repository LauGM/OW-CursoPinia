<script setup lang="ts">
import { ref } from 'vue'
import { useCountryStore } from './stores/countryStore';


const store = useCountryStore();

let country = ref({
  id: store.getQuantity + 1,
  name: '',
  continent: '',
  dimension: 0
})

const addToStore = () => {
  /* console.log(country.value) */
  store.setNewCountry(country.value);
  //limpiamos 
  country.value = {
    id: store.getQuantity + 1,
    name: '',
    continent: '',
    dimension: 0
  }
}

</script>

<template>
  <input type="text" placeholder="nombre del pais" v-model="country.name">
  <input type="text" placeholder="continente" v-model="country.continent">
  <input type="number" v-model.number="country.dimension">
  <button @click="addToStore">Agregar al store</button>
  <p>Paises cargados: {{ store.getQuantity }}</p>
  <section>
    <article v-for="item of store.countriesList" :key="item.id">
      <p>{{ item.name }}</p>
    </article>
  </section>
</template>

<style scoped></style>