<template>
  <header>
    <h1>{{ title }}</h1><Button text="Add task" color="limegreen" />
  </header>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: 'Header',
  props: { title: String },
  components: { Button },
}
</script>

<style scoped>
header {
  margin-top: 50px;
}
</style>