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
    path: '/todo-list/:title',
    name: "todo-list",
    component: todoList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
