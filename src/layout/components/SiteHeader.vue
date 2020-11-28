<template>
  <div class="header">
    <div class="main">
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
          <router-link v-for="link in links" :key="link" :to="link.to" :class="link.class" active-class="active">
            {{ link.name }}
          </router-link>
        </div>
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
  background-image: url("../../assets/header-bg.png");
  background-repeat: no-repeat;
  background-size: 1440px 70px;
  background-position: 0 30px;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  .main {
    display: flex;
    width: 80%;
  }

  .logo {
    width: 550px;
    height: 80px;
  }
  .nav {
    flex: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .lang {
      height: 30px;
      display: flex;
      margin: 0;
      // padding: 5px 0;
      box-sizing: border-box;
      align-items: center;
      justify-content: flex-end;
      > * {
        padding: 0 1em;
      }
      > * + * {
        border-left: 1px solid black;
      }
    }

    // .lang {
    //   margin: 0;
    //   padding: 0;
    //   display: flex;
    //   height: 24px;
    //   padding: 3px 0;
    //   line-height: 30px;
    //   box-sizing: border-box;
    //   text-align: right;
    //   display: flex;
    //   justify-content: flex-end;
    //   margin-right: 80px;
    //   color: grey;
    //   background-color: white;
    //   > * {
    //     padding: 0 1em;
    //     box-sizing: border-box;
    //   }
    //   & .active {
    //     color: cornflowerblue;
    //   }
    //   > * + * {
    //     border-left: 1px solid #000;
    //   }
    // }
    .tabs {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      // background-color: #2b75c4;
      color: white;
      font-size: 1.2rem;
      > a {
        text-align: center;
        flex: 1;
        height: 70px;
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
</style>
