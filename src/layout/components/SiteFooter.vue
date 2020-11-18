<template>
  <div class="footer">
    <div class="main-info">
      <div class="logo">
        <img src="" alt="慧仓科技LOGO" />
      </div>
      <div class="yellow-pages-information">
        <ul class="none-list-style">
          <li>
            <i></i>
            <span>浙江省杭州市滨江区滨康路101号海威大厦裙楼3层</span>
          </li>
          <li>
            <i></i>
            <span>400-099-2588</span>
          </li>
          <li>
            <i></i>
            <span> (0571)8610-0693 </span>
          </li>
          <li>
            <i></i>
            <span> www.hcrobots.com </span>
          </li>
        </ul>
      </div>
      <div class="official-account-qr-code">
        <img src="" alt="公众号二维码" />
      </div>
    </div>
    <div class="for-record-information">
      ©HC Robots 浙ICP备17025264号
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteFooter",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
//底部样式
.footer {
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // width: 100%;
  background-color: #434343;
  color: white;
  height: 350px;
  overflow: hidden;
  .main-info {
    margin: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
    }
    .yellow-pages-information {
      display: flex;
      flex-direction: column;
      // align-items: center;
      justify-content: center;
      line-height: 2em;
      padding: 1em;
      border-left: 1px solid white;
      border-right: 1px solid white;
    }
  }
  .for-record-information {
    height: 50px;
    background-color: #222;
    text-align: center;
    line-height: 50px;
  }
}
.none-list-style {
  list-style: none;
}
</style>
