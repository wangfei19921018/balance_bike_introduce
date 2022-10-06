<template>
  <div class="pdf-container">
    <canvas
      :id="`pdfCanvas${page}`"
      v-for="page in data.pdfPages"
      :key="page"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { reactive, nextTick, onMounted, toRaw, isProxy } from "vue";
import * as PDF from "pdfjs-dist";
import entry from "pdfjs-dist/build/pdf.worker.entry"; // 引入时会报红线错误，不影响运行， 或在index.d.ts中声明declare
import pdf from "@/assets/user_manual/balance_bike.pdf";

const data = reactive<any>({
  pdfPath: pdf, //本地PDF文件路径放在/public中
  pdfPages: [], // 页数
  pdfWidth: "", // 宽度
  pdfSrc: "", // 地址
  pdfDoc: "", // 文档内容
  pdfScale: 1.0, // 放大倍数
});

onMounted(() => {
  PDF.GlobalWorkerOptions.workerSrc = entry;
  loadFile(data.pdfPath);
});

const loadFile = (url: string) => {
  let loadingTask = PDF.getDocument(url);
  loadingTask.promise.then((pdf: any) => {
    data.pdfDoc = pdf;
    data.pdfPages = pdf.numPages;
    nextTick(() => {
      renderPage(1);
    });
  });
};

const renderPage = (num: number) => {
  toRaw(data.pdfDoc)
    .getPage(num)
    .then((page: any) => {
      let canvas: any = document.getElementById("pdfCanvas" + num);
      let ctx = canvas.getContext("2d");
      let dpr = window.devicePixelRatio || 1;
      let bsr =
        ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1;
      let ratio = dpr / bsr;
      let viewport = page.getViewport({ scale: data.pdfScale });
      canvas.width = viewport.width * ratio;
      canvas.height = viewport.height * ratio;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      data.pdfWidth = viewport.width + "px";
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      // 将 PDF 页面渲染到 canvas 上下文中
      let renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };
      page.render(renderContext);
      if (data.pdfPages > num) {
        renderPage(num + 1);
      }
    });
};
</script>

<style scoped lang="sass">
.pdf-container
  width: 100vw
  height: 100vh
  margin: 0 auto
  overflow: auto
</style>
