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
      <div class="tabs none-list-style">
        <router-link
          v-for="link in links"
          :key="link"
          :to="link.to"
          :class="link.class"
          active-class="active"
        >
          {{ link.name }}
        </router-link>
        <!-- <router-link to="/" class="home active">首页</router-link>
        <router-link to="products" class="products">产品中心</router-link>
        <router-link to="news" class="news">新闻中心</router-link>
        <router-link to="about" class="about-us"> 关于慧仓 </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteHeader",
  data() {
    return {
      links: [
        { name: "首页", to: "home", class: "home" },
        { name: "产品中心", to: "products", class: "products" },
        { name: "新闻中心", to: "news", class: "news" },
        { name: "关于慧仓", to: "about", class: "about-us" },
      ],
    };
  },
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
    justify-content: space-between;
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
      > a {
        text-align: center;
        flex: 1;
        height: 100%;
        // line-height: 2.5em;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
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
