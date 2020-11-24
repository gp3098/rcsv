<template>
  <div class="body">
    <a-carousel>
      <div v-for="(img, index) in imgs" :key="index">
        <img class="big-pic" :src="img.src" />
      </div>
    </a-carousel>

    <div class="about-hc info-block">
      <h1>
        <span>关于慧仓</span>
        <span> ABOUT HC </span>
      </h1>
      <div class="article">
        <div>
          <p>
            慧仓科技立足于高速立体的仓储自动化核心技术，聚焦标准化、模块化的高速立体存储和分拣两大创新产品线。公司由机器人及实时控制领域的两位美归教授联合创办，核心团队凝聚了物流装备、仓储运营等行业的精英人士，拥有强大的自主研发实力和完善的生产实施能力。
          </p>
          <p>
            慧仓产品广泛应用于制造、流通和终端等环节，以“省人省地、双管齐下”为突出优势，可节省70%以上的人工和占地。慧仓产品具备快速实施、灵活搬迁的显著特点，为客户提供高投入产出比、高灵活性的仓储自动化解决方案。
            慧仓科技秉承“技术为本，客户为先”的发展理念，客户群从世界五百强到中小企业，涵盖工业制造、电商、工业品流通、冷链生鲜、前置仓等诸多领域。慧仓科技胸怀“中国创造，服务全球”的发展愿景，销售服务网络覆盖全国，并与日本、韩国和美国的行业龙头合作，成功打入日韩和欧美市场。
          </p>
          <p>
            慧仓科技将不断提供高可靠性、高性价比的高速立体仓储产品，为您的仓储智能升级助力。
          </p>
        </div>

        <img :src="abouthc" alt="" class="about-hc-img" />
      </div>
    </div>

    <div class="innovative-solution info-block">
      <h1>
        <span>创新方案</span>
        <span>INNOVATIVE SOLUTION</span>
      </h1>
      <div class="vs">
        <div class="our-solution">
          <span class="title">我们的方案</span>
          <img src="../../assets/ours-solution.jpg" alt="我们的方案.jpg" />
          <ul>
            <li>机器人数量灵活增减少</li>
            <li>
              多机并行工作
            </li>
            <li>系统无单点瓶颈</li>
          </ul>
        </div>
        <div class="vs">VS</div>
        <div class="classic-solution">
          <span class="title">传统立库方案</span>
          <img src="../../assets/classic-solution.jpg" alt="传统的方案.jpg" />
          <ul>
            <li>基于提升机的多穿或堆垛机系统</li>
            <li>
              提升机为单点瓶颈
            </li>
            <li>系统效率低下</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="product-center info-block">
      <h1>
        <span>产品中心</span>
        <span>PRODUCT CENTER</span>
      </h1>
      <div class="section OmniStorage-Pro">
        <img src="" alt="" />
        <div class="">
          <span>慧仓摩天轮</span>
          <span>
            OmniStorage-Pro
          </span>
        </div>
      </div>
      <div class="section OmniStorage-Mini">
        <img src="" alt="" />
        <div class="">
          <span>
            慧仓迷你库
          </span>
          <span>OmniStorage-Mini</span>
        </div>
      </div>
      <div class="section OmniSort">
        <img src="" alt="" />
        <div class="">
          <span>慧仓闪电播</span>
          <span>OmniSort</span>
        </div>
      </div>
    </div>

    <div class="application-case">
      <h1>
        <span> 应用案例 </span>
        <span> APPLICATION CASE</span>
      </h1>
    </div>
    <div class="application-industry">
      <h1>
        <span> 应用行业 </span>
        <span> APPLICATION INDUSTRY</span>
      </h1>
      <div class="section">
        <dl>
          <div>
            <dt>制造:</dt>
            <dd>电子</dd>
            <dd>印染</dd>
            <dd>精密加工</dd>
          </div>
          <div>
            <dt>流通:</dt>
            <dd>电商</dd>
            <dd>生鲜冷链</dd>
            <dd>快消</dd>
            <dd>MRO</dd>
          </div>
          <div>
            <dt>终端:</dt>
            <dd>前置仓</dd>
            <dd>无人店</dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="news-center">
      <h1>
        <span>
          新闻中心
        </span>
        <span>
          NEWS CENTER
        </span>
      </h1>
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
    > div {
      width: 500px;
      height: 400px;
      text-align: left;
    }
  }
}
.info-block {
  min-height: 750px;
  width: 100%;
  > h1 {
    color: #0075c9;
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
