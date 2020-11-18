<template>
  <div class="header">
    <div class="logo">
      <img src="../../assets/logo.png" alt="" class="huicang-logo" />
    </div>
    <div class="nav">
      <ul class="lang none-list-style">
        <li class="lang-item active">中文</li>
        <li class="lang-item">English</li>
        <li class="lang-item">日本語</li>
      </ul>
      <ul class="tabs none-list-style">
        <li class="home active">首页</li>
        <li class="products">产品中心</li>
        <li class="news">新闻中心</li>
        <li class="about-us">关于慧仓</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
//头部样式
.header {
  width: 100%;
  // height: 100px;
  overflow: hidden;
  display: flex;
  .logo {
    width: 490px;
    height: 80px;
  }
  .nav {
    flex: auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    > ul {
      margin: 0;
      padding: 0;
      display: flex;
    }
    .lang {
      height: 2em;
      line-height: 1em;
      padding: 0.5em;
      box-sizing: border-box;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      margin-right: 80px;
      color: grey;
      background-color: white;
      > * {
        padding: 0 1em;
      }
      & .active {
        color: cornflowerblue;
      }
      > * + * {
        border-left: 1px solid #000;
      }
    }
    .tabs {
      display: flex;
      flex: auto;
      justify-content: space-evenly;
      align-items: center;
      background-color: #2b75c4;
      color: white;
      font-size: 1.2rem;
      > li {
        text-align: center;
        flex: 1;
        line-height: 2.5em;
      }
      & .active {
        background-color: #5db4e2;
      }
    }
  }
}
.none-list-style {
  list-style: none;
}
</style>
