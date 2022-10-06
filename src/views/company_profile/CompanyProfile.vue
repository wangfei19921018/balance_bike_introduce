<template>
  <div class="container">
    <img :src="state.placeHolderImg" />
    <div>{{ state.text }}}</div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import PlaceHolderImg from "/src/assets/company_profile/company_profile_placehoder.png";
const state = reactive({
  placeHolderImg: PlaceHolderImg,
  text: "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0这是一篇范文平衡车有限公司是一家主要经营平衡车摩托车电动车的综合性企业。自成立以来,始终坚持以人为本，以创新为发展动力，秉承“信誉第一，质量至上”的经营理念，争创市场一流品牌。公司的主经营 产品以品种齐全、价格合理的优势，在消费者当中享有较高的地位，赢得了广大客户的一致好评。志存高远，锐意进取 在机遇与挑战面前，本公司将不断求索,愿与所有的伙伴一路同行，一同成就未来，共建伟业。",
});
</script>

<style scoped lang="sass">
.container
  background-color: #313540
  height: 100vh
  & > img
    width: 375px
    height: 120px
  & > div
    color: white
    font-size: 12px
    margin: 30px 16px 0
    line-height: 20px
</style>
