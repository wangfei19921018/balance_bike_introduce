<template>
  <div class="container">
    <div v-for="(item, index) in state.paragraphs" :key="index">{{ item }}</div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  paragraphs: [
    "两轮智能轮平衡车操作说明：",
    '1、打开车辆中控区“Power"电源键。',
    "2、调节车辆将脚踏板置于水平位置。",
    "3、单脚踩踏踏板，启动车辆自平衡系统。",
    "4、轻摇手把，待平衡系统启动后才能上车。",
    "5、首次上车会出现前后晃动属正常现象，可由助手在车前紧握手把帮助首次找准平衡感。",
    "6、前后微调身体重心，找到将车辆置原地的平衡点。",
    "7、身体前倾为启动/加速车辆，身体后仰为减速/停止/ 倒车。",
    "8、手把类似钟摆，可左右摆动实现转弯。",
    "9、驾驶时目视前方，新手上路请慢行，避让行人及障碍。",
    "10、严禁在高速行驶中急速转弯。",
    "11、确保车辆电量充足状态下骑行，车辆15%电量以下会自动将为低速档。",
    "12、充电时禁止车辆使。",
  ],
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
