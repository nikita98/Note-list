<template>
  <application-window title="Задачи">
    <todo-category
      v-for="todoCategory in TODOCATEGORIES"
      :key="todoCategory.number"
      :number="todoCategory.number"
      :title="todoCategory.title"
      :todos="todoCategory.todos"
    />
    <add label="Add category" v-on:addElem="addCategory"></add>
  </application-window>
</template>

<script>
import todoCategory from "@/components/todo-category.vue";
import applicationWindow from "@/components/application-window.vue";
import add from "@/components/add.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    todoCategory,
    applicationWindow,
    add
  },
  methods: {
    addCategory() {
      
    }
  },
  computed: {
    //computed
    ...mapGetters(["TODOCATEGORIES"])
  }
};
</script>
