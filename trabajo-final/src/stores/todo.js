import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTodoStore = defineStore('todo', () => {
    //state
    const todos = ref([{ id: 1, description: "Study Pinia", completed: false, createdAt: new Date().toLocaleString() }, { id: 2, description: "Study Vue", completed: true, createdAt: new Date().toLocaleString() }]);
    //getters
    const getCount = computed(() => todos.value.length);
    const getLastId = computed(() => todos.value[todos.value.length - 1].id);
    //actions
    function addTodo(newTodo) {
        todos.value.push(newTodo);
    }
    function deleteTodo(id) {
        const todoIndex = todos.value.findIndex(todo => todo.id === id);
        todos.value.splice(todoIndex, 1);
    }
    function updateTodo(updatedTodo) {
        const todoIndex = todos.value.findIndex(todo => todo.id === updatedTodo.id);
        todos.value[todoIndex] = updatedTodo;
    }

    return { todos, getCount, getLastId, addTodo, deleteTodo, updateTodo }
})