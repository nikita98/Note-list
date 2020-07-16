<template>
  <form class="add" v-on:submit.prevent="submit">
    <div class="add__icon-wrap">
      <div class="add__icon"></div>
    </div>
    <div class="add__input-wrap">
      <label for="add" class="add__label">{{ label }}</label>
      <input name="add" class="add__input" type="text" v-model.trim="input" placeholder="Category name" />
    </div>
  </form>
</template>

<script>
export default {
  props: ["label"],
  data() {
      return {
          input: ""
      }
  },
  methods: {
      submit(){
          this.$emit("addElem", this.input);
      }
  }
};
</script>

<style lang="scss">
.add {
  height: 30px;
//   background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: 0.3s;
  &__icon-wrap {
    height: 100%;
    display: flex;
    margin-left: calc(50% - 10px);
    transition: 0.3s;
  }
  &__icon {
    height: 20px;
    width: 20px;
    min-width: 20px;
    margin-top: 5px;
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
    width: 300px;
    margin-left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__label {
    font-size: 20px;
    margin-bottom: 20px;
  }
  &__input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #fff;
    outline: 0;
    color: #fff;
    font-size: 18px;
    width: auto;
    text-align: center;
  }
  &:hover {
    height: 100px;
    .add__icon-wrap {
      margin-left: -170px;
    }
  }
}
</style>
  
  



    