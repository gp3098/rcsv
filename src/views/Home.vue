<template>
  <div class="home container">
    <site-header />
    <div class="body">
      <a-carousel :after-change="onChange">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </a-carousel>
    </div>
    <site-footer />
  </div>
</template>

<script>
import { Carousel as ACarousel } from "ant-design-vue";

import SiteFooter from "../layout/components/SiteFooter.vue";
import SiteHeader from "../layout/components/SiteHeader.vue";
// const app = createApp();
// app.use(Carousel);
export default {
  name: "Home",
  components: {
    SiteFooter,
    ACarousel,
    // Button,
    // Carousel,
    SiteHeader,

    // HelloWorld,
  },
  data() {
    return {};
  },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },
};
</script>

<style lang="less" scoped>
//容器样式
.container {
  // width: 100%;
  width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
}
.none-list-style {
  list-style: none;
}

.body {
  min-height: calc(100vh - 80px);
}
</style>

<style scoped>
/* For demo */
.ant-carousel ::v-deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel ::v-deep(.slick-slide h3) {
  color: #fff;
}
</style>
