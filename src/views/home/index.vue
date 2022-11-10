<template>
  <div class="home-page">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from '@/views/home/components/HomeCategory'
export default {
  name: 'HomePage',
  components: { HomeCategory }
}
</script>

<style lang="less" scoped>

</style>
