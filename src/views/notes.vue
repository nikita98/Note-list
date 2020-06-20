<template>
  <div class="notes">
    <div class="notes__inner">
      <div class="notes__title">Задачи</div>
      <note
        v-for="note in NOTES"
        :key="note.number"
        :number="note.number"
        :title="note.title"
        :todos="note.todos"
      />
    </div>
  </div>
</template>

<script>
import note from "@/components/note.vue";
import { mapGetters } from "vuex";

export default {
  name: "notes",
  components: {
    note
  },
  computed: {
    //computed
    ...mapGetters(["NOTES"])
  }
};
</script>

<style lang="scss">
.notes {
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
