<script setup>
import EntryContent from '@/components/EntryContent.vue'
import AnimatedHeaderText from '@/components/AnimatedHeaderText.vue'

const headerText = ['факторинг 1', 'факторинг 2', 'факторинг 3']
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
              Получите <br />
              <AnimatedHeaderText :text="headerText" />
            </h2>
            <h2>для бизнеса на выгодных<br />условиях</h2>
          </div>
          <div id="home-header__contact">+7 999 999-99-99</div>
        </div>
      </div>
    </header>
    <EntryContent />
  </main>
</template>

<style scoped></style>
