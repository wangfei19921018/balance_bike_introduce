<template>
  <div class="container">
    <div v-for="(item, index) in state.paragraphs" :key="index">{{item}}</div>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const state = reactive({
  paragraphs: [
    '1.两轮智能平衡车驾驶过程中需要注意什么？',
    '首先请由始至终保持冷静，要充分信任本平衡车和你的身体；当然，也不要像驾驶坦克一样驾驶本平衡车；最后，虽然本平衡车可以倒退行驶，但由于视野和转向离心力反向等原因，请尽量向前行驶：',
    '2.两轮智能平衡车的最高时速和单次最长里程是多少？',
    '每小时20公里的最高时速和单次30-60公里的最长里程 （视型号而定）',
    '3.两轮智能平衡车单次充电要充多久？',
    '一般情况下需要3-5个小时。为了最大限制地延长电池寿命，请每隔一个月（中间无驾驶）或者每次骑行2天后充电一次，保持电池不要亏电，损坏电池。',
    '4.两轮智能平衡车无法开机时，要如何处理？',
    '①请保持电池电量足够启动。',
    '②确保电池是否插到位。',
    '③确保充电器是否正常。',
    '④确保车体不发出警告信号。',
    '5.手机蓝牙如何连接到两轮智能平衡车APP?'
  ]
});

</script>

<style scoped lang="sass">
.container
  background-color: #313540
  min-height: 100vh
  color: white
  font-size: 13px
  padding: 15px 30px
  box-sizing: border-box
  line-height: 20px
  & > div:not(div:last-child)
    margin-bottom: 20px
</style>
