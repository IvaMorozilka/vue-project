<script setup>
import IconMenu from '@/components/icons/IconMenu.vue'
import MainContainer from '../marking/MainContainer.vue'
import { computed, onBeforeMount, ref } from 'vue'

const color = computed(() => (topOfPage.value ? 'white' : 'black'))
const topOfPage = ref(true)
function changeColor() {
  color.value = color.value === 'white' ? 'black' : 'white'
}
function handleScroll() {
  if (window.pageYOffset > 0) {
    if (topOfPage.value) topOfPage.value = false
  } else {
    if (!topOfPage.value) topOfPage.value = true
  }
}

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    id="class-header"
    class="fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-out"
    :class="{ 'bg-white bg-opacity-90': !topOfPage }"
  >
    <div id="site-header__inner">
      <MainContainer>
        <div id="site-header__layout" class="flex justify-between items-center py-10">
          <div id="site-header__logo" class="mr-12">
            <img src="../../assets/sample_logo.png" width="100" height="20" />
            <p class="font-medium uppercase text-xs" :style="{ color }">Logo description</p>
          </div>
          <button
            id="site-header__menu"
            class="w-10 h-10 flex justify-center items-center mr-12"
            @click="changeColor"
          >
            <IconMenu :color="color" />
          </button>
        </div>
      </MainContainer>
    </div>
  </div>
</template>
