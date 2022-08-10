<template>
  <div id="app">
    <TTodoHeader></TTodoHeader>
    <TTodoInput v-on:addTodo="addTodo"></TTodoInput>
    <TTodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TTodoList>
    <TTodoFooter v-on:removeAll="clearAll"></TTodoFooter>
  </div>
</template>

<script>
import todoHeader from './components/todoHeader.vue'
import todoInput from './components/todoInput.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  components: {
    'TTodoHeader': todoHeader,
    'TTodoInput': todoInput,
    'TTodoList': todoList,
    'TTodoFooter': todoFooter,
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>
