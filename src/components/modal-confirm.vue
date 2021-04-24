<template>
  <div class="modal">
    <div class="modal__inner">
      <div class="modal__text">{{ text }}</div>
      <div class="modal__footer">
        <div class="btn modal__btn" @click="confirm(true)">Yes</div>
        <div class="btn btn_deny modal__btn" @click="confirm(false)">No</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "actionName"],
  methods: {
    confirm(confirmation) {
      this.$emit("action", confirmation);
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
  align-items: flex-start;
  justify-content: center;
  &__inner {
    margin-top: 10vh;
    width: 400px;
    max-width: 80%;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: rgb(139, 67, 233);
    font-size: 18px;
  }
  &__text {
    text-align: center;
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