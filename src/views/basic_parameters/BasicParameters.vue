<template>
  <div class="container">
    <img :src="state.placeholder" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import PlacehoderImg from "/src/assets/basic_parameters/basic_parameters_placeholder.png";

const state = reactive({
  placeholder: PlacehoderImg,
});
</script>

<style scoped lang="sass">
.container
  height: 100vh
  width: 100vw
  & > img
    width: 100%
    height: 100%
</style>
