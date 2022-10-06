<template>
  <div class="container">{{state.title}}</div>
</template>

<script setup>
import {reactive} from "vue";

const state = reactive({title: '出厂日期：2021年7月1日'})
</script>

<style scoped lang="sass">
.container
  box-sizing: border-box
  padding: 14px 40px
  color: white
  font-size: 13px
  height: 100vh
  background-color: #313540
</style>
