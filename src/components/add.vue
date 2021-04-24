<template>
  <form class="add" v-on:submit.prevent="submit">
    <div class="add__input-wrap">
      <label for="add" class="add__label">{{ label }}</label>
      <input
        name="add"
        class="add__input"
        type="text"
        v-model.trim="input"
      />
    </div>
    <div class="add__icon-wrap" @click.prevent="submit">
      <div class="add__icon"></div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["label"],
  data() {
    return {
      input: ""
    };
  },
  methods: {
    submit() {
      if (this.input.length) {
        this.$emit("addElem", this.input);
        this.input = "";
      }
    }
  }
};
</script>

<style lang="scss">
.add {
  padding: 10px 20px;
  //   background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.3s;
  &__icon-wrap {
    height: 100%;
    display: flex;
    transition: 0.3s;
  }
  &__icon {
    height: 20px;
    width: 20px;
    min-width: 20px;
    margin-right: 5px;
    position: relative;
    // background-color: rgba(255, 255, 255, 0.9);
    &::after {
      content: "";
      position: absolute;
      background-color: #fff;
      height: 100%;
      width: 2px;
      left: calc(50% - 1px);
    }
    &::before {
      content: "";
      position: absolute;
      background-color: #fff;
      width: 100%;
      height: 2px;
      top: calc(50% - 1px);
      left: 0;
    }
  }
  &__input-wrap {
  }
  &__label {
    font-size: 20px;
    margin-right: 15px;
  }
  &__input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #fff;
    outline: 0;
    color: #fff;
    font-size: 18px;
    width: auto;
  }
}
</style>
  
  



    