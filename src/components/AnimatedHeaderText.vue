<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  text: Array
})
const index = ref(0)
const animateIn = ref(false)
const animateOut = ref(false)
const delay = 2000

const currentText = computed(() => props.text[Object.keys(props.text)[index.value]])

onMounted(() => {
  setInterval(() => {
    animateIn.value = true
    index.value = (index.value + 1) % Object.keys(props.text).length
  }, delay)
})

const resetAnimation = () => {
  animateIn.value = false
}
</script>

<template>
  <div class="pl-3 font-bold" :class="{ 'fade-in': animateIn }" @animationend="resetAnimation">
    {{ currentText }}
  </div>
</template>

<style scoped>
@keyframes slideIn {
  from {
    transform: translateY(-50%) rotateX(90deg);
    opacity: 0;
  }
  to {
    transform: translateY(0) rotateX(0deg);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  to {
    transform: translateY(50%) rotateX(-90deg);
    opacity: 0;
  }
}

.fade-in {
  animation: slideIn 1s;
}

.fade-out {
  animation: slideOut 0.5s;
}
</style>
