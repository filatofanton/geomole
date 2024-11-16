<script>
export default {
  props: {
    currentProject: Object
  }
}
</script>

<template>
  <footer class="footer fixed-bottom text-bg-dark p-1" style="height: 30px;">
    <span class="text-center"> Текущий проект: {{ currentProject }}</span>
  </footer>
</template>

<style>

</style>