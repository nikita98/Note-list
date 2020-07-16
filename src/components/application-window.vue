<template>
  <div class="application-window">
    <div class="application-window__inner">
      <div class="application-window__title">{{ title }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "label"]
};
</script>

<style lang="scss">
.application-window {
  display: flex;
  justify-content: center;
  &__inner {
    width: 100%;
    max-width: 800px;
    // border: 2px solid #6239bd;
    box-shadow: -2px 2px 8px 1px rgba(98, 57, 189, 0.6);
    border-top: 0;
    background-image: url("../assets/clouds.png");
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__title {
    width: 100%;
    height: 60px;
    font-size: 24px;
    // background-color: #6239bd;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
