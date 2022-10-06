<template>
  <div class="container">
    <div v-for="(item, index) in state.paragraphs" :key="index">{{ item }}</div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  paragraphs: [
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0这是一篇范文骑行前，请检查你的装备和车况，包括护具，刹车等，尽量不使用自己不熟悉的车。护具是使你在发生事故的时候尽量减少伤害。熟悉车况能使你在有异常路况时能及时判断，从而做出准确的处理动作。骑行前，整理好自己的衣服和附属物品，以免骑行中影响注意力而引发事故。",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0骑行中，务必双手握把，手指轻触刹车（油碟车禁止多指带刹车）。切勿在骑行中双手或单手脱把，禁止骑行中整理衣服，撩头发，扶眼镜，摘戴耳机，使用电话，看地图，扯裤子等有损生命安全的活动，如有以上需求，可靠边停车后进行。 ",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0骑行中，禁止单手捏刹车，以免出现脸刹、漂移等高危事故。刹车时，禁止站立，屁股必须靠紧坐垫后部，以免前空翻。骑行中，禁止随意变道。变道时，请左右观察身后路况再进行。",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0骑行中，请遵守交通规则，不走机动车道，不闯红灯，不逆行。",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0骑行中，尽量不进行聊天，听音乐，看美女等分散注意力的活动。 ",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0骑行中，尽量以匀速行进，不突然加速或急刹车，以免别的车做出错误的判断。 ",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0骑时，请保证让别人能清楚看到你的灯光配置。",
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
