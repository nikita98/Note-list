import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [
      {
        title: "chores",
        number: 0,
        todos: [
          { text: "wash dishes", done: true, number: 0 },
          { text: "wipe dust", done: true, number: 1 },
          { text: "cook food", done: true, number: 2 },
          {
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident aperiam harum, reiciendis at similique amet vel natus autem deserunt?",
            done: false,
            number: 3
          }
        ]
      },
      {
        title: "wash yourself",
        number: 1,
        todos: [
          { text: "wash", done: false, number: 0 },
          { text: "brush teeth", done: true, number: 1 },
          { text: "trim nails", done: false, number: 2 }
        ]
      },
      {
        title: "complete the test task",
        number: 2,
        todos: [
          { text: "create a store", done: false, number: 0 },
          { text: "set up a link with firebase", done: false, number: 1 },
          { text: "HTML coding", done: false, number: 2 },
          { text: "make pretty styles", done: false, number: 3 }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    NOTES: state => state.notes
  },
  modules: {}
});
