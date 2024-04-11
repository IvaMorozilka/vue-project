<template>
  <i class="gg-menu" :style="{ color }"></i>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style scoped>
.gg-menu {
  transform: scale(2);
}
.gg-menu,
.gg-menu::after,
.gg-menu::before {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 3px;
  background: currentColor;
}
.gg-menu::after,
.gg-menu::before {
  content: '';
  position: absolute;
  top: -6px;
}
.gg-menu::after {
  top: 6px;
}
</style>
