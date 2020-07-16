<template>
  <div class="modal">
    <div class="modal__inner">
      <div class="modal__text">
        {{ text }}
        <span class="modal__text-bold">{{ meaning }}</span>
      </div>
      <div class="modal__footer">
        <div class="btn modal__btn">Yes</div>
        <div class="btn btn_deny modal__btn">No</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "meaning"],
  methods: {
    confirm() {
      this.$emit("confirm", this.meaning);
    }
  }
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(128, 106, 255, 0.2);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &__inner {
    width: 400px;
    max-width: 80%;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    font-size: 18px;
  }
  &__text {
    text-align: left;
    margin-bottom: 30px;
  }
  &__text-bold {
    font-weight: bold;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>