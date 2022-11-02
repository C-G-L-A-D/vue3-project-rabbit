<template>
  <ul class="app-header-navs">
    <li class="home"><router-link to="/">首页</router-link></li>
    <li v-for="item in list" :key="item.id" @mouseenter="show(item.id)" @mouseleave="hide(item.id)">
      <router-link :to="`/category/${item.id}`" @click="hide(item.id)">{{item.name}}</router-link>
      <!-- 子级菜单分类导航布局 -->
      <div class="layout" :class="{open: item.open}">
        <ul>
          <li v-for="child in item.children" :key="child.id">
            <router-link :to="`/category/sub/${child.id}`" @click="hide(item.id)">
              <img
                :src="child.picture"
                :alt="`${child.name}图标`"
              />
              <p>{{child.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
export default {
  name: 'AppHeaderNav',
  setup () {
    const store = useStore()

    const list = computed(() => {
      return store.state.category.list
    })
    // 显示二级分类导航
    const show = (id) => {
      store.commit('category/showSubCategory', id)
    }

    // 隐藏二级分类导航
    const hide = (id) => {
      store.commit('category/hideSubCategory', id)
    }

    return {
      list,
      show,
      hide
    }
  }
}
</script>

<style lang="less" scoped>
.app-header-navs {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
  }
  .layout {
    height: 0px;
    overflow: hidden;
    width: 1240px;
    position: absolute;
    // 因为是图片的高度占据前面200px位置，所以用定位拉动
    left: -200px;
    top: 56pxpx;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    transition: all .2s .1s;
    > ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 70px;
      align-items: center;
      height: 132px;
      li {
        width: 110px;
        text-align: center;
        img {
          width: 60px;
          height: 60px;
        }
        p {
          padding-top: 10px;
        }
        &:hover {
          p {
          color: @xtxColor;
          }
        }
      }
    }
    &.open {
      height: 132px;
      // opacity: 1;
    }
  }
}
</style>
