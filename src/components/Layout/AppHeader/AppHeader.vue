<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <router-link to="/">小兔鲜</router-link>
      </h1>
      <!-- 抽离导航公共部分，引入组件 -->
      <AppHeaderNav />
      <!-- 搜索模块 -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <div class="cart">
        <a href="#" class="curr">
          <i class="iconfont icon-cart"></i>
          <em>2</em>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import AppHeaderNav from './AppHeaderNav.vue'
export default {
  name: 'AppHeader',
  components: { AppHeaderNav }
}
</script>

<style lang="less" scoped>
.app-header {
  background-color: #fff;
  .container {
    display: flex;
    align-items: center;
  }
  // logo图片样式
  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -999px;
      background: url(@/assets/images/logo.png) no-repeat center 18px / contain;
    }
  }
  // 搜索框样式
  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }
    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
  // 购物车图标样式
  .cart {
    width: 50px;
    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;
      .icon-cart {
        font-size: 22px;
      }
      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: @helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
