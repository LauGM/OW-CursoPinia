import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface CountryState {
  id: number
  name: string
  continent: string
  dimension: number
}

export const useCountryStore = defineStore('countries', () => {
  //state
  const countriesList = ref<CountryState[]>([])
  //getters
  const getQuantity = computed(() => countriesList.value.length)
  //actions
  function setNewCountry(newCountry: CountryState) {
    countriesList.value.push(newCountry)
  }
  return { countriesList, getQuantity, setNewCountry }
})
