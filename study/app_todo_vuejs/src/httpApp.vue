<template>
  <div id="app">
    <t-todo-header></t-todo-header>
    <t-todo-input v-on:add-todo="addTodo"></t-todo-input>
    <t-todo-list v-bind:propsdata="todoItems" @remove-todo="removeTodo"></t-todo-list>
    <t-todo-footer v-on:remove-all="clearAll"></t-todo-footer>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      todoItems: []
    }
  },
  components: {
    't-todo-header': httpVueLoader('./components/httpTodoHeader.vue'),
    't-todo-input': httpVueLoader('./components/httpTodoInput.vue'),
    't-todo-list': httpVueLoader('./components/httpTodoList.vue'),
    't-todo-footer': httpVueLoader('./components/httpTodoFooter.vue'),
  },
  methods: {
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    addTodo(todoItem) {
      console.log('addTodo///' + todoItem)
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
