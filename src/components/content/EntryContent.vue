<script setup>
import CaseCard from '@/components/widgets/CaseCard.vue'
import MainContainer from '../shared/MainContainer.vue'
import AvatarCard from "@/components/widgets/AvatarCard.vue";
</script>

<template>
  <main-container>
    <div class="flex flex-row justify-between flex-nowrap text-start mb-[30px] py-36">
      <div class="flex flex-col w-[28%]">
        <h2 class="text-4xl text-header-1 font-bold">Вы платите только за результат</h2>
        <h3 class="text-lg font-normal flex items-center !text-left pt-4">
          <a href="#" id="link" class="text-accent"> Подробнее о компании</a>
        </h3>
      </div>
      <div class="h-full w-[72%]">
        <p class="text-main-1 font-normal text-xl">
          Мы взимаем плату за предоставление консалтинговых услуг только после успешного закрытия
          сделки. Экспертное знание отрасли кредитования юридических лиц, накопленное многолетним
          опытом работы, позволяет нам быть уверенными в успехе самых сложных случаев привлечения
          финансирования в юрисдикции РФ
        </p>
      </div>
    </div>
  </main-container>
  <div class = "bg-gray-100">
    <main-container class = "pb-[80px]">
      <div class="flex items-center justify-between">
        <h2 class="text-main-2 text-2xl uppercase font-medium pt-[50px] pb-[60px]">
          Успешные кейсы компании
        </h2>
        <p class="text-accent text-sm uppercase font-medium pt-[45px]">Читать все кейсы</p>
      </div>
      <div class="pt-[10px] flex justify-between">
        <case-card/>
        <case-card/>
        <case-card/>
      </div>
    </main-container>
  </div>
  <main-container>
    <h2 class = "uppercase font-semibold text-2xl pt-[100px] pb-[10px]">Наши эксперты</h2>
    <div class = 'flex justify-between mb-[50px]'>
      <AvatarCard/>
      <AvatarCard/>
      <AvatarCard/>
      <AvatarCard/>
    </div>
    <div class = 'text-right mb-[100px]'>
      <a class="uppercase text-accent pr-[15px] text-sm font-semibold">Все эксперты</a>
    </div>
  </main-container>
</template>

<style scoped>
</style>
