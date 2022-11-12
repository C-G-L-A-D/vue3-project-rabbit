<template>
  <div class="home-page">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <HomeBanner/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from '@/views/home/components/HomeCategory'
import HomeBanner from './components/HomeBanner'
export default {
  name: 'HomePage',
  components: { HomeCategory, HomeBanner }
}
</script>

<style lang="less" scoped>

</style>
