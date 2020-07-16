<template>
  <div class="todo-category">
    <div class="todo-category__header" @click="$router.push('todo-list/' + title)">
      <span class="todo-category__title">{{ title }}</span>
      <span class="todo-category__number">{{done.length + "/" + sortedTodos.length}}</span>
    </div>
    <div class="todo-category__list">
      <todo
        v-for="todo in sortedTodos"
        :key="todo.id"
        :id="todo.id"
        :text="todo.text"
        :done="todo.done"
      />
    </div>
  </div>
</template>

<script>
import todo from "@/components/todo.vue";

export default {
  components: {
    todo
  },
  props: ["id", "title", "todos"],
  data() {
    return {
      done: [],
      notDone: [],
      sortedTodos: []
    };
  },
  methods: {
    todoSort() {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].done) {
          this.done.push(this.todos[i]);
        } else {
          this.notDone.push(this.todos[i]);
        }
      }
      this.sortedTodos = this.notDone.concat(this.done);
    }
  },
  mounted() {
    this.todoSort();
  }
};
</script>

<style lang="scss">
.todo-category {
  &__header {
    cursor: pointer;
    font-size: 24px;
    background-color: rgba(98, 57, 189, 0.6);
    height: 50px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
  &__list {
    background-color: #fff;
    width: 100%;
    display: flex;
  }
}
</style>
