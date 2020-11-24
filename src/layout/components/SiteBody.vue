<template>
  <div class="body">
    <a-carousel>
      <div v-for="(img, index) in imgs" :key="index">
        <img class="big-pic" :src="img.src" />
      </div>
    </a-carousel>

    <div class="about-hc info-block white-bg">
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
        <div class="hall">
          <img :src="abouthc" alt="" class="about-hc-img" />
        </div>
      </div>
    </div>

    <div class="innovative-solution info-block grey-bg">
      <h1>
        <span>创新方案</span>
        <span>INNOVATIVE SOLUTION</span>
      </h1>
      <div class="section">
        <div class="our-solution">
          <span class="title">我们的方案</span>
          <img src="../../assets/ours-solution.png" alt="我们的方案" />
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
          <img src="../../assets/classic-solution.png" alt="传统的方案" />
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

    <div class="product-center info-block white-bg ">
      <h1>
        <span>产品中心</span>
        <span>PRODUCT CENTER</span>
      </h1>
      <div class="section">
        <div class="OmniStorage-Pro">
          <img src="../../assets/OmniStorage-Pro.png" alt="慧仓摩天轮" />
          <div class="product-name">
            <span>慧仓摩天轮</span>
            <span>
              OmniStorage Pro
            </span>
          </div>
        </div>
        <div class="OmniStorage-Mini">
          <img src="../../assets/OmniStorage-Mini.png" alt="慧仓迷你库" />
          <div class="product-name">
            <span> 慧仓迷你库 </span>
            <span>OmniStorage Mini</span>
          </div>
        </div>
        <div class="OmniSort">
          <img src="../../assets/OmniSort.png" alt="慧仓闪电播" />
          <div class="product-name">
            <span>慧仓闪电播</span>
            <span>OmniSort</span>
          </div>
        </div>
      </div>
    </div>

    <div class="application-case info-block grey-bg">
      <h1>
        <span> 应用案例 </span>
        <span> APPLICATION CASE</span>
      </h1>
      <div class="section">
        <img class="case-img" src="../../assets/case01.png" alt="案例01" />
        <img class="case-img" src="../../assets/case02.png" alt="案例02" />
        <img class="case-img" src="../../assets/case03.png" alt="案例03" />
        <img class="case-img" src="../../assets/case04.png" alt="案例04" />
      </div>
    </div>
    <div class="application-industry  info-block white-bg">
      <h1>
        <span> 应用行业 </span>
        <span> APPLICATION INDUSTRY</span>
      </h1>
      <div class="section">
        <dl>
          <div class="grey-bg">
            <dt>制造:</dt>
            <dd>
              <img src="../../assets/manufacturing-Electronic.png" alt="电子" class="icon" />
              <span> 电子 </span>
            </dd>
            <dd>
              <img src="../../assets/manufacturing-printing-dye.png" alt="印染" class="icon" />
              <span> 印染 </span>
            </dd>
            <dd>
              <img src="../../assets/manufacturing-precision-machin.png" alt="精密加工" class="icon" />
              <span> 精密加工 </span>
            </dd>
          </div>
          <div class="grey-bg">
            <dt>流通:</dt>
            <dd>
              <img src="../../assets/circulation-merchants.png" alt="电商" class="icon" />
              <span> 电商 </span>
            </dd>
            <dd>
              <img src="../../assets/circulation-fresh-cold-chain.png" alt="生鲜冷链" class="icon" />
              <span> 生鲜冷链 </span>
            </dd>
            <dd>
              <img src="../../assets/circulation-consumer.png" alt="快消" class="icon" />
              <span> 快消</span>
            </dd>
            <dd>
              <img src="../../assets/circulation-MRO.png" alt="MRO" class="icon" />
              <span> MRO</span>
            </dd>
          </div>
          <div class="grey-bg">
            <dt>终端:</dt>
            <dd>
              <img src="../../assets/terminal-lead-warehouse.png" alt="前置仓" class="icon" />
              <span> 前置仓</span>
            </dd>
            <dd>
              <img src="../../assets/terminal-no-one-shop.png" alt="无人店" class="icon" />
              <span>无人店</span>
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="news-center info-block grey-bg">
      <h1>
        <span>
          新闻中心
        </span>
        <span>
          NEWS CENTER
        </span>
      </h1>
      <div class="section">
        <div class="head ">
          <span class="active">企业新闻</span>
          <span>行业新闻</span>
        </div>
        <div class="news">
          <div class="poster">
            <img src="" alt="" />
          </div>
          <div class="news-summary">
            <div class="news-item">
              <span class="no"> 01 </span>
              <div class="summary">
                <div class="title">asdfjaklj骄asdf士大夫发</div>
                <div class="small">安居客阿斯蒂芬士大夫</div>
              </div>
            </div>
            <div class="news-item">
              <span class="no"> 02 </span>
              <div class="summary">
                <div class="title">asdfjaklj骄傲是发 阿斯蒂芬居</div>
                <div class="small">安居阿斯蒂芬圾士大夫</div>
              </div>
            </div>
            <div class="news-item">
              <span class="no"> 03 </span>
              <div class="summary">
                <div class="title">asdfjaklj骄阿斯蒂芬居</div>
                <div class="small ellips">
                  安居阿斯蒂芬阿斯蒂啊手动阀手动阀芬阿斯顿阿斯蒂芬阿斯asdfasdfasf蒂芬阿斯asdfasdfasdf蒂芬大夫
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../styles/variables.less";
//关于我们
.about-hc {
  width: 100%;
  text-align: center;
  //标题
  > h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  //关于我们的简介文章
  .article {
    display: flex;
    justify-content: center;
    > div:first-child {
      width: 500px;
      height: 400px;
      text-align: left;
    }
  }
  //大厅图片容器
  .hall {
    margin-left: 40px;
    width: 468px;
    height: 350px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
//通用信息块
.info-block {
  min-height: 750px;
  width: 100%;
  padding: 72px;
  box-sizing: border-box;
  > h1 {
    color: @mainblue;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 80px;
    > span:first-child {
      font-weight: bold;
    }
  }
}
// 创新方案
.innovative-solution {
  font-weight: bold;
  > .section {
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      > .title {
        font-size: 1.2em;
      }
      li {
        line-height: 2em;
      }
    }
    .vs {
      color: #0075c9;
      font-size: 100px;
    }
  }
}

//产品中心
.product-center {
  .section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > div {
      width: 400px;

      display: flex;
      flex-direction: column;
      align-items: center;

      > img {
        width: 100%;
        object-fit: contain;
        object-position: center;
      }
      .product-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        > :first-child {
          font-weight: bold;
          color: @mainblue;
          padding: 0 2em;
          border-bottom: 2px solid @mainblue;
        }
      }
    }
  }
}
//应用案例
.application-case {
  .section {
    display: flex;
    justify-content: space-evenly;
    .case-img {
      width: 20%;
      min-width: 260px;
    }
  }
}
//应用行业
.application-industry {
  .section {
    > dl > div {
      display: flex;
      border-radius: 20px;
      margin: 10px auto;
      // width: fit-content;
      width: 800px;
      align-items: center;
      padding: 0 4em;
      box-sizing: border-box;
      > dt {
        font-size: 1.8em;
        width: 100px;
        font-weight: bold;
      }
      > dd {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1em;
        margin: 0 20px 0 0;
        box-sizing: border-box;
        > span {
          font-size: 1.2em;
        }
      }
      img.icon {
        width: 100px;
        height: 100px;
      }
    }
  }
}
//新闻中心
.news-center {
  .section {
    .head {
      text-align: center;
      margin-bottom: 40px;

      > span {
        padding: 0.4em 1em;
        font-size: 1.2em;
      }
      * + * {
        border-left: 2px solid black;
      }
      & .active {
        color: @mainblue;
      }
    }
    .news {
      display: flex;
      align-items: center;
      justify-content: center;
      div.poster {
        width: 400px;
        height: 300px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .news-summary {
        margin-left: 40px;
        width: 500px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .news-item {
          display: flex;
          align-items: center;
          .no {
            font-size: 1.4em;
            font-weight: bold;
            padding: 0 1.2em;
          }
          .summary {
            flex: auto;
          }
          .title {
            width: 99%;
            font-size: 1.2em;
            font-weight: bold;
          }
          .small {
            width: 99%;
          }
        }
      }
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
