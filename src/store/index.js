import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoCategories: [
      {
        title: "chores",
        id: 0,
        todos: [
          { text: "wash dishes", done: true, id: 123 },
          { text: "wipe dust", done: false, id: 1213123213 },
          { text: "cook food", done: true, id: 2 },
          {
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident aperiam harum, reiciendis at similique amet vel natus autem deserunt?",
            done: false,
            id: 3
          }
        ]
      },
      {
        title: "wash yourself",
        id: 1,
        todos: [
          { text: "wash", done: false, id: 0 },
          { text: "brush teeth", done: true, id: 1 },
          { text: "trim nails", done: false, id: 2 }
        ]
      },
      {
        title: "complete the test task",
        id: 2,
        todos: [
          { text: "create a store", done: false, id: 0 },
          { text: "set up a link with firebase", done: false, id: 1 },
          { text: "HTML coding", done: false, id: 2 },
          { text: "make pretty styles", done: false, id: 3 }
        ]
      }
    ]
  },
  mutations: {
    ADDTODOCATEGORY(state, category) {
      state.todoCategories.push(category);
      console.log(category);
    }
  },
  actions: {},
  getters: {
    TODOCATEGORIES: state => state.todoCategories,
    TODOCATEGORY: state => title => {
      return state.todoCategories.find(todoCategory => todoCategory.title === title);
    }
  },
  modules: {}
});
