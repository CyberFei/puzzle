<template>
  <img src="./bg.png" alt class="home-bg">
</template>

<script>
export default {
  created() {
    if (PUZZLE_CONFIG.pageHome && PUZZLE_CONFIG.pageHome != "")
      this.$router.replace({ name: PUZZLE_CONFIG.pageHome });
  }
};
</script>

<style>
.home-bg {
  width: 340px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
