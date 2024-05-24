<script setup>
import TodoCard from './TodoCard.vue';
import { useTodoStore } from '@/stores/todo';

const store = useTodoStore();

const handleUpdate = (updated) => {
    store.updateTodo(updated);
}
</script>
<template>
    <div class="container">
        <TodoCard v-for="todo in store.todos" :key="todo.id" :id="todo.id" :description="todo.description"
            :completed="todo.completed" :createdAt="todo.createdAt" @callDelete="store.deleteTodo(todo.id)"
            @callUpdate="handleUpdate" />
    </div>
</template>


<style scoped>
.container {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
    padding: 60px;
}
</style>