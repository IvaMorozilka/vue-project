<script setup>
const props = defineProps({
  cardTitle_h4: {
    type: String,
    default: "Card title h4"
  },
  cardTitle_p: {
    type: String,
    default: "Card title p"
  },
  cardDescription_title: {
    type: String,
    default: "Card description title"
  },
  cardDescription_p: {
    type: String,
    default: "Card description p",
  }
})
</script>

<template>
  <div class="mb-[50px]">
    <div
        class="h-[385px] max-h-[385px] min-w-[280px] card-bg rounded-xl hover:mt-[-10px] transition-all duration-300 ease-in-out"
    >
      <div id="case-card-img">
        <img
            class="w-full max-h-[120px] object-cover rounded-t-xl"
            src="../../assets/card_img.jpg"
        />
      </div>
      <div id="case-card-text" class="py-[15px] px-[23px]">
        <div id="case-card-title">
          <h4 class="font-bold text-sm text-white">{{ cardTitle_h4 }}</h4>
          <p class="font-medium text-xs text-accent mt-1">
            {{ cardTitle_p }}
          </p>
        </div>
        <div id="case-card-description">
          <p class="font-medium text-xs text-accent mt-4">{{ cardDescription_title }}</p>
          <p class="font-normal text-xs text-white mt-1 mb-6">
            {{ cardDescription_p }}
          </p>
          <a class="font-semibold text-xs text-accent">Читать далее</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-bg {
  background: linear-gradient(170.39deg, #084778 7.24%, #084778 109.4%);
}
</style>
