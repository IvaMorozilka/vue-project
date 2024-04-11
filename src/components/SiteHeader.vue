<script setup>
import IconMenu from '@/components/icons/IconMenu.vue'
import { ref } from 'vue'

const color = ref('white')
function changeColor() {
  color.value = color.value === 'white' ? 'black' : 'white'
}
</script>

<template>
  <div id="class-header" class="fixed top-0 left-0 w-full z-10">
    <div id="site-header__inner">
      <div class="container mx-auto px-4 max-w-5xl">
        <div id="site-header__layout" class="flex justify-between items-center py-10">
          <div id="site-header__logo" class="mr-12">
            <img src="@/assets/sample_logo.png" width="100" height="20" />
            <p class="font-medium uppercase text-xs" :style="{ color: color }">Logo description</p>
          </div>
          <button
            id="site-header__menu"
            class="w-10 h-10 flex justify-center items-center mr-12"
            @click="changeColor"
          >
            <IconMenu :color="color" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
