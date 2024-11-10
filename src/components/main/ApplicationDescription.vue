<script>
  const currentDate = new Date();
  export default {
    data() {
      return {
        formattedDate: currentDate.toLocaleString('ru', { month: 'long', day: 'numeric', year: 'numeric' })
      }
    }
  }
</script>

<template>
  <h5 class="mt-3">Описание приложения для обработки ИГИ дынных Geomole</h5>
  <p class="mt-3">Реализованные модули на {{ formattedDate }}:</p>
  <ul>
    <li>Авторизация пользователя</li>
    <li>Проекты</li>
    <li>Выработки</li>
    <li>Образцы грунтов и их свойств</li>
    <li>Инженерно-геологические элементы</li>
    <li>Послойное описание выработок</li>
    <li>Статистическая обработка состава и физ. характеристик грунтов по ИГЭ</li>
  </ul>
</template>

<style>

</style>