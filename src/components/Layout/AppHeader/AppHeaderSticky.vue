<!-- 头部吸顶导航（粘性定位） -->
<template>
    <!-- 动态添加滚动动画 -->
  <div class="app-header-sticky" :class="{show: y>=78}">
    <!-- 防止遮挡其他元素，添加显示控制 -->
    <div class="container" v-show="y >= 78">
      <!-- logo -->
      <router-link class="logo" to="/" />
      <!-- 抽离导航公共部分，引入组件 -->
      <AppHeaderNav />
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderNav from './AppHeaderNav.vue'
// import { ref, onMounted } from 'vue'
import { useWindowScroll } from 'vueuse/core'
export default {
  name: 'AppHeaderSticky',
  components: { AppHeaderNav },
  setup () {
    // 监听视窗下滑滚动距离超过78px后显示组件
    /* 原生操作DOM方法
    const y = ref(0)
    onMounted(() => {
      // 组件渲染就监听滚动事件
      window.onscroll = () => {
        const scrollTop = document.documentElement.scrollTop
        y.value = scrollTop
      }
    }) */
    // 使用逻辑封装库提供的函数获取页面滚动距离
    const { y } = useWindowScroll()
    return { y }
  }
}
</script>

<style lang="less" scoped>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 滚动动画
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(@/assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>
