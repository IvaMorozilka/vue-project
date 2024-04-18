<template>
  <Card pt:content:class="py-[10px]" class="w-[230px] relative z-0 text-center">
    <template #header>
      <span class="bg-amber-400 absolute w-full h-24 top-0 left-0 rounded-t-xl z-[-1]"></span>
    </template>
    <template #title>
      <Avatar image="/vue-project/src/assets/employee.webp" size="xlarge" shape="circle"/>
      <h2 class="uppercase text-center text-base">Имя Фамилия</h2>
    </template>
    <template #content>
      <p class="text-center text-sm font-semibold">Должность, что то еще.</p>
    </template>
    <template #footer>
      <Button rounded size="small" style="height: 30px; ">Подробнее</Button>
    </template>
  </Card>
</template>

<style scoped>
.p-avatar-xl {
  width: 190px;
  height: 190px;
}
</style>

<script>
export default {
  name: 'AvatarCard'
}
</script>
