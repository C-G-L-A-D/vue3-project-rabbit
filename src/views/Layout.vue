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
import AppTopNav from '@/components/AppTopNav'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  name: 'Layout',
  components: { AppTopNav, AppHeader, AppFooter }
}
</script>

<style lang="less" scoped>

</style>
