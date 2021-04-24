<template>
  <application-window title="Tasks">
    <template v-slot:content>
      <todo-category
        v-for="todoCategory in TODOCATEGORIES"
        :key="todoCategory.number"
        :number="todoCategory.number"
        :title="todoCategory.title"
        :todos="todoCategory.todos"
      />
    </template>
    <template v-slot:footer>
      <add label="Add category" v-on:addElem="addCategory"></add>
    </template>
  </application-window>
</template>

<script>
import todoCategory from "@/components/todo-category.vue";
import applicationWindow from "@/components/application-window.vue";
import add from "@/components/add.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    todoCategory,
    applicationWindow,
    add
  },
  methods: {
    ...mapMutations(["ADDTODOCATEGORY"]),
    addCategory(text) {
      this.ADDTODOCATEGORY(text);
    }
  },
  computed: {
    //computed
    ...mapGetters(["TODOCATEGORIES"])
  }
};
</script>
