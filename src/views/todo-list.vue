<template>
  <div class="todo-list">
    <modal-confirm v-if="isModal" :text="modalText" v-on:action="modalAction" />
    <application-window
      :title="todoCategory.title"
      needSave="true"
      v-on:saveData="saveData"
    >
      <template v-slot:content>
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
      </template>
      <template v-slot:footer>
        <add label="Add todo" v-on:addElem="addTodo"></add>
      </template>
    </application-window>
  </div>
</template>

<script>
import expandTodo from "@/components/expand-todo.vue";
import applicationWindow from "@/components/application-window.vue";
import modalConfirm from "@/components/modal-confirm.vue";
import add from "@/components/add.vue";
import { mapGetters, mapMutations } from "vuex";

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
      todoCategory: {},
      isModal: false,
      delID: null,
      modalText: "Are you shure want to delete todo?"
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    ...mapMutations(["CHANGETODOCATEGORY"]),
    saveData() {
      this.CHANGETODOCATEGORY(this.todoCategory);
    },
    titheChange(title) {
      this.todoCategory.title = title
      console.log(this.todoCategory);
    },
    addTodo(text) {
      let todo = {
        text: text,
        done: false,
        id: Math.random() * Math.pow(10, 16)
      };
      this.todoCategory.todos.push(todo);
      console.log(this.todoCategory);
    },
    fillData() {
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
    changeTodoText(id, text) {
      this.findTodo(id).text = text;
    },
    delTodo(id) {
      this.delID = id;
      this.isModal = true;
    },
    modalAction(confirmation) {
      this.isModal = false;
      if (confirmation) {
        for (let i = 0; i < this.todoCategory.todos.length; i++) {
          if (this.todoCategory.todos[i].id === this.delID) {
            this.todoCategory.todos.splice(i, 1);
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(["TODOCATEGORY"])
  }
};
</script>

<style lang="scss">
</style>
