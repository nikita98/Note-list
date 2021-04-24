<template>
  <div class="expand-todo" :class="{'expand-todo_done': done } ">
    <TextareaAutosize v-model="text" rows="1" class="expand-todo__text" />
    {{ upText }}
    <div class="expand-todo__btns">
      <img
        class="expand-todo__btn expand-todo__btn_delete"
        src="../assets/icon/delete.png"
        @click="del"
      />
      <div class="expand-todo__check" @click="check">
        <div class="expand-todo__check-tick" v-if="done"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import TextareaAutosize from "vue-textarea-autosize";

export default {
  // components: {
  //   TextareaAutosize
  // },
  data() {
    return {
      id: this.todoId,
      text: this.todoText,
      done: this.todoDone
    };
  },
  props: ["todoId", "todoText", "todoDone"],
  computed: {
    upText() {
      this.change();
      return this.text.slice(0, 0);
    }
  },
  methods: {
    del() {
      this.$emit("del", this.id);
    },
    change() {
      this.$emit("change", this.id, this.text);
    },
    check() {
      this.done = !this.done;
      this.$emit("check", this.id, this.done);
    }
  }
};
</script>

<style scoped lang="scss">
.expand-todo {
  background-color: rgb(57, 125, 189);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: start;
  text-align: left;
  padding: 5px 10px 5px 20px;
  border-top: 1px solid #fff;
  &_done {
    background-color: rgb(57, 189, 101);
  }

  &__text {
    display: block;
    width: calc(100% - 80px);
    background-color: transparent;
    border: 0;
    outline: 0;
    color: #fff;
    font-size: 18px;
    resize: none;
    overflow: hidden;
    padding: 3px 0;
  }
  &__btns {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__btn {
    cursor: pointer;
    height: 29px;
    padding: 0 5px;
    filter: invert(100%);
  }
  &__check {
    cursor: pointer;
    border: 2px solid #fff;
    border-radius: 3px;
    height: 15px;
    width: 15px;
    position: relative;
  }
  &__check-tick {
    width: 10px;
    height: 2px;
    top: 8px;
    left: -2px;
    border-radius: 2px;
    transform: rotate(45deg);
    background-color: #fff;
    position: absolute;
    &::after {
      position: absolute;
      content: "";
      height: 20px;
      width: 2px;
      bottom: 0;
      right: 0;
      background-color: #fff;
    }
  }
}
</style>
