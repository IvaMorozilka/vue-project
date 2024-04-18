<template>
  <Card pt:content:class="py-[10px]" pt:footer:class="pt-[10px]" :pt:root:class = "{'-translate-y-[10px]' : hover}"
        class="w-[230px] relative z-0 text-center transition-all duration-300 cursor-pointer" @mouseenter="hover = true"
        @mouseleave="hover = false">
    <template #header>
      <span class="bg-amber-400 absolute w-full h-24 top-0 left-0 rounded-t-[6px] z-[-1]"></span>
    </template>
    <template #title>
      <Avatar :image="avatar" size="xlarge" shape="circle"/>
      <h2 class="uppercase text-center text-base">Имя Фамилия</h2>
    </template>
    <template #content>
      <p class="text-center text-sm font-semibold">Должность, что то еще.</p>
    </template>
    <template #footer>
      <Button rounded size="small" style="height: 25px"
              :class="{'opacity-100 scale-105': hover, 'opacity-0 scale-90 translate-y-[10px]': !hover}"
              class='transition-all duration-300'
      >Подробнее
      </Button>
    </template>
  </Card>
</template>

<style scoped>
.p-avatar-xl {
  width: 190px;
  height: 190px;
}
</style>

<script setup>
import {ref} from "vue";
import avatar from "@/assets/avatar.jpg"
const hover = ref(false)
</script>


