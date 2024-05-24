<script setup>
import { ref } from 'vue';

const props = defineProps({
    id: Number,
    description: String,
    completed: Boolean,
    createdAt: String,
})

const emit = defineEmits(['callDelete', 'callUpdate']);

let updating = ref(false);
let newDescription = ref('');
let newCompleted = ref(props.completed);

const handleUpdate = () => {
    const updatedObject = {
        id: props.id,
        description: newDescription.value,
        completed: newCompleted.value,
        createdAt: props.createdAt,
    }
    emit('callUpdate', updatedObject);
    updating.value = false;
}

</script>

<template>
    <section class="card">
        <h3 v-if="!updating">{{ props.id }} - {{ props.description }}</h3>
        <input v-else type="text" :placeholder="props.description" v-model="newDescription">
        <label for="completed">
            Completed
            <input type="checkbox" name="completed" id="completed" :checked="props.completed" :disabled="!updating"
                v-model="newCompleted" />
        </label>
        <article>
            <button v-if="updating" @click="handleUpdate">✅</button>
            <div v-else>
                <button @click="updating = !updating">✍🏻</button>
                <button @click="emit('callDelete')">❌</button>
            </div>
        </article>
        <article>
            <p>Created at:{{ props.createdAt }}</p>
        </article>
    </section>
</template>


<style scoped>
.card {
    border: '1px solid black';
    border-radius: 5px;
    background-color: aliceblue;
    color: black;
    padding: 10px;
    max-width: 20%;
    min-width: 150px;
}
</style>