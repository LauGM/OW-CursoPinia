<script setup>
import { onMounted, ref } from 'vue';
import { useProductStore } from './stores/ProductsStore';

//acceder al almacen que creamos bajo el nombre 'store' u otro
const store = useProductStore();
let actualProds = ref([]);

onMounted(() => {
  const unsubscribe = store.$onAction(({ name, store, after, onError }) => {
    after(() => {
      console.log(`La acción ${name} se ha ejecutado. Nuevo valor del contador:${store.stock}`);
      actualProds.value=store.products;
    });
    // esto se activará si la acción lanza un error o devuelve una promesa 
    // rechazada
    onError((error) => {
      console.log(`${error}`);
    });
  });
  
  store.fillProducts();
  // Desuscribirse después de un tiempo
  setTimeout(() => {
    unsubscribe();
    console.log('Desuscripción completada');
  }, 2000);
});


const handleClickDesc = () => {
  actualProds.value=store.orderByIdDesc;
}

const handleClickAsc = () => {
  actualProds.value=store.orderByIdAsc;
}
</script>

<template>
  <h1>Productos</h1>
  <p>Cantidad stock: {{ store.stock }}</p>
  <button @click="handleClickDesc">Ordenar por ID descendente</button>
  <button @click="handleClickAsc">Ordenar por ID ascendente</button>
  <section class="container">
    <article class="card" v-for="prod of actualProds" :key="prod.id">
      <h4>{{ prod.id }}</h4>
      <p>{{ prod.title }}</p>
      <img :src="prod.image" width="80%" :alt="prod.title" />
    </article>
  </section>
  <section>
    <p v-if="!store.isEmpty">El almacen no esta vacio 🤩</p>
    <p v-else>El almacen esta vacio 😒</p>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  background-color: white;
  border: 1px solid white;
  border-radius: 20%;
  margin: 5px;
  padding: 20px;
  color: blue;
}
</style>
