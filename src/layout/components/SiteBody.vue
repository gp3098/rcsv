<template>
  <div class="body">
    <a-carousel>
      <div v-for="(img, index) in imgs" :key="index">
        <img class="big-pic" :src="img.src" />
      </div>
    </a-carousel>
    <div class="about-hc">
      <h1>
        <span>关于慧仓</span>
        <span> ABOUT HC </span>
      </h1>
      <div class="article">
        <p>
          abcef
        </p>
        <img :src="abouthc" alt="" class="about-hc-img" />
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel as ACarousel } from "ant-design-vue";
import big1 from "../../assets/big1.png";
import big2 from "../../assets/big2.png";
import big3 from "../../assets/big3.png";
import abouthc from "../../assets/about-hc.png";

export default {
  name: "SiteBody",
  props: {},
  data() {
    return {
      abouthc,
      imgs: [{ src: big1 }, { src: big2 }, { src: big3 }],
    };
  },
  components: {
    ACarousel,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.about-hc {
  width: 100%;
  text-align: center;
  > h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .article {
    display: flex;
    justify-content: space-evenly;
    p {
      width: 500px;
      height: 400px;
      text-align: left;
    }
  }
}
</style>

<style scoped>
/* For demo */
.ant-carousel ::v-deep(.slick-slide) {
  text-align: center;
  /* height: 660px; */
  /* line-height: 160px; */
  /* background: #364d79; */
  overflow: hidden;
}

.ant-carousel ::v-deep(.slick-slide h3) {
  color: #fff;
}
.big-pic {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}
</style>
