import Vue from "vue";
import VueRouter from "vue-router";
import todoCategories from "../views/todo-categories.vue";
import todoList from "../views/todo-list.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "todo-categories",
    component: todoCategories
  },
  {
    path: "/todo-list/:title",
    name: "todo-list",
    component: todoList
  }
];

const router = new VueRouter({
  base: "/todo-list/",
  routes
});

export default router;
