<template>
  <div class="todo-list">
    <application-window :title="todoCategory.title">
      <modal-confirm v-if="isModal" :text="modalText" :action="modalAction" />
      <expand-todo
        v-for="todo in todoCategory.todos"
        :key="todo.id"
        :todoId="todo.id"
        :todoText="todo.text"
        :todoDone="todo.done"
        v-on:check="changeTodoDone"
        v-on:del="delTodo"
        v-on:change="changeTodoText"
      />
      <add></add>
    </application-window>
  </div>
</template>

<script>
import expandTodo from "@/components/expand-todo.vue";
import applicationWindow from "@/components/application-window.vue";
import modalConfirm from "@/components/modal-confirm.vue";
import add from "@/components/add.vue";
import { mapGetters } from "vuex";

export default {
  name: "todo-list",
  components: {
    expandTodo,
    modalConfirm,
    applicationWindow,
    add
  },
  data() {
    return {
      todoCategory: [],
      isModal: false,
      modalText: "Are you shure want to delete todo?",
      modalAction: "del"
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      // this.todoCategory = {... this.TODOCATEGORY(this.$route.params.title)};
      
      // this.todoCategory =  Object.assign({}, this.TODOCATEGORY(this.$route.params.title));
      
      this.todoCategory = JSON.parse(
        JSON.stringify(this.TODOCATEGORY(this.$route.params.title))
      );
    },
    findTodo(id) {
      for (let i = 0; i < this.todoCategory.todos.length; i++) {
        if (this.todoCategory.todos[i].id === id) {
          return this.todoCategory.todos[i];
        }
      }
      return false;
    },
    changeTodoDone(id, value) {
      console.log("value = " + value);
      console.log("this.findTodo(id).done = " + this.findTodo(id).done);

      this.findTodo(id).done = value;
    },
    delTodo(id) {
      for (let i = 0; i < this.todoCategory.todos.length; i++) {
        if (this.todoCategory.todos[i].id === id) {
          this.todoCategory.todos.splice(i, 1);
        }
      }
    },
    changeTodoText(id, text) {
      this.findTodo(id).text = text;
    }
  },
  computed: {
    ...mapGetters(["TODOCATEGORY"])
  }
};
</script>

<style lang="scss">
</style>
