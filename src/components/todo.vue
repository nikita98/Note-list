<template>
  <div class="todo" :class="{ done: done }">{{ short(text) }}</div>
</template>

<script>
export default {
  name: "todo",
  props: ["number", "text", "done"],
  methods: {
    short(text) {
      if (text.length > 26) {
        return text.substr(0, 24) + "...";
      } else {
        return text;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo {
  background-color: rgb(57, 125, 189);
  color: #fff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  margin: 5px;
  width: 100px;
  height: 40px;
  cursor: pointer;
}
.done {
  background-color: rgb(57, 189, 101);
}
</style>
