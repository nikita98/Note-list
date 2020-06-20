<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <notes />
  </div>
</template>

<script>
import notes from "@/components/notes.vue";

export default {
  name: "Home",
  components: {
    notes
  }
};
</script>
