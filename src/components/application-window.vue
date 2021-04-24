<template>
  <div class="application-window">
    <div class="application-window__inner">
      <div class="application-window__header">
        <div class="application-window__title">{{ title }}</div>
        <div class="application-window__title-save">
          <img
            v-if="needSave"
            class="application-window__save"
            src="../assets/icon/save.png"
            @click="saveData"
          />
        </div>
      </div>
      <slot name="content"></slot>
      <div class="application-window__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "needSave"],
  methods: {
    saveData() {
      this.$emit("saveData");
    }
  }
};
</script>

<style lang="scss">
.application-window {
  display: flex;
  justify-content: center;
  position: relative;
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
  &__header {
    width: 100%;
    height: 60px;
    // background-color: #6239bd;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  &__title {
    font-size: 24px;
    color: #fff;
  }
  &__save {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translate(0, -50%);
    height: 40px;
    filter: invert(100%);
  }
}
</style>
