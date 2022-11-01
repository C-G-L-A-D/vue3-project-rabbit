<template>
    <!-- 顶部通栏 -->
    <AppTopNav />
    <!-- 头部组件 -->
    <AppHeader />
    <!-- 内容容器 -->
    <main>
        <!-- 二级路由 -->
        <RouterView />
    </main>
    <!-- 底部组件 -->
    <AppFooter />
</template>

<script>
import AppTopNav from '@/components/Layout/AppTopNav'
import AppHeader from '@/components/Layout/AppHeader/AppHeader.vue'
import AppFooter from '@/components/Layout/AppFooter'
export default {
  name: 'Layout',
  components: { AppTopNav, AppHeader, AppFooter }
}
</script>

<style lang="less" scoped>

</style>
