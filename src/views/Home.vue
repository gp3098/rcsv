<template>
  <div class="home container">
    <site-header />
    <site-body />
    <site-footer />
  </div>
</template>

<script>
import SiteBody from "../layout/components/SiteBody.vue";
import SiteFooter from "../layout/components/SiteFooter.vue";
import SiteHeader from "../layout/components/SiteHeader.vue";
// const app = createApp();
// app.use(Carousel);
export default {
  name: "Home",
  components: {
    SiteFooter,
    // Button,
    // Carousel,
    SiteHeader,
    SiteBody,

    // HelloWorld,
  },
  data() {
    return {};
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
