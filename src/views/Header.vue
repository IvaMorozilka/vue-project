<script setup>
import IconBase from '@/components/IconBase.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
</script>

<template>
  <div id="site-header__inner">
    <div class="container mx-auto px-4 max-w-5xl">
      <div id="site-header__layout" class="flex justify-between items-center py-10">
        <div id="site-header__logo">
          <img src="@/assets/sample_logo.png" width="132" height="32"
        </div>
        <button id="site-header__menu" class="w-10 h-10 flex justify-center items-center">
          <IconMenu />
        </button>
      </div>
    </div>
  </div>
</template>
