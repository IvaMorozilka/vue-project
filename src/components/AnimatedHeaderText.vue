<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  text: Array
})
const index = ref(0)
const animate = ref(false)
// const animateOut = ref(false)
const delay = 2000

const currentText = computed(() => props.text[Object.keys(props.text)[index.value]])

onMounted(() => {
  setInterval(() => {
    animate.value = true
    index.value = (index.value + 1) % Object.keys(props.text).length
  }, delay)
})

const resetAnimation = () => {
  animate.value = false
}
</script>

<template>
  <div
    class="pl-3 font-bold"
    :class="{ 'animate-fade animate-once animate-ease-out': animate }"
    @animationend="resetAnimation"
  >
    {{ currentText }}
  </div>
</template>

<style scoped>
/* @keyframes slideIn {
  from {
    transform: translateY(0%);
    opacity: 0;
  }
  to {
    transform: translateY(50%);
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
} */
</style>
