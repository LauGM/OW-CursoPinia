<script setup>
import { ref } from 'vue';
import { useTodoStore } from '@/stores/todo';

const store = useTodoStore();

let newTask = ref('');

const handleAdd = () => {
    const newTodo = {
        id: store.getLastId + 1,
        description: newTask.value,
        completed: false,
        createdAt: new Date().toLocaleString(),
    }
    store.addTodo(newTodo);
    newTask.value = '';
}

</script>
<template>
    <div>
        <label for="todo">
            Add to-do:
            <input type="text" placeholder="task description" v-model="newTask" />
        </label>
        <button @click="handleAdd">Add</button>
    </div>
</template>


<style scoped></style>