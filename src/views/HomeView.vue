<script setup>
import { ref, computed, onMounted } from 'vue'
import EntryContent from '@/components/EntryContent.vue'

const index = ref(0)
const animate = ref(false)

const textArray = ['фа', 'факто', 'факторинг', 'еще что-то']
const delay = 2500

const currentText = computed(() => textArray[Object.keys(textArray)[index.value]])

onMounted(() => {
  setInterval(() => {
    animate.value = true
    index.value = (index.value + 1) % Object.keys(textArray).length
  }, delay)
})

const resetAnimation = () => {
  animate.value = false
}
</script>

<template>
  <main>
    <div id="home__video" class="absolute w-full h-screen">
      <video loop="loop" autoplay muted playsinline class="absolute w-full h-full object-cover">
        <source
          src="../assets/pryamougolnik_1_chasy_roleks_noyabr_united_after2_4.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <header class="text-white">
      <div id="home-header__container" class="container mx-auto px-4 max-w-5xl relative">
        <div id="home-header__text__container" class="h-screen flex justify-between flex-col">
          <div
            id="home-header__text"
            class="h-screen flex justify-center flex-col text-4xl font-light"
          >
            <h2 class="flex">
              Получите
              <div
                class="pl-3 font-bold"
                :class="{ 'fade-in': animate }"
                @animationend="resetAnimation"
              >
                {{ currentText }}
              </div>
            </h2>
            <h2>для бизнеса на выгодных<br />условиях</h2>
          </div>
          <div id="home-header__contact">+79999999999</div>
        </div>
      </div>
    </header>
    <EntryContent />
  </main>
</template>

<style scoped>
.fade-in {
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
