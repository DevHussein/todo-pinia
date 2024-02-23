<script lang="ts" setup>
import TodoForm from '../components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
</script>
<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <todo-form />
    <todo-list />
  </div>
</template>
<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}
</style>