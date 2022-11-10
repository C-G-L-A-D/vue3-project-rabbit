<template>
  <div class="home-category" @mouseleave="categoryId = null">
    <!-- 左侧分类 -->
    <ul class="menu">
      <li
        v-for="item in menuList"
        :key="item.id"
        @mouseenter="categoryId = item.id"
        :class="{ active: categoryId === item.id }"
      >
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        <template v-if="item.children">
          <RouterLink
            v-for="sub in item.children"
            :key="sub.id"
            :to="`/category/sub/${sub.id}`"
          >
            {{ sub.name }}
          </RouterLink>
        </template>
      </li>
    </ul>
    <!-- 分类推荐弹窗 -->
    <div class="layer">
      <h4>
        {{ curCategory && curCategory.id === "brand" ? "品牌" : "分类" }}推荐
        <small>根据您的购买或浏览记录推荐</small>
      </h4>
      <!-- 商品 -->
      <ul v-if="curCategory && curCategory.goods">
        <li v-for="item in curCategory.goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" :alt="`推荐商品-${item.name}`" />
            <div class="info">
              <p class="name ellipsis-2">{{ item.name }}</p>
              <p class="desc ellipsis">{{ item.desc }}</p>
              <p class="price"><i>¥</i>{{ item.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <!-- 品牌 -->
      <ul v-if="curCategory && curCategory.brands">
        <li class="brand" v-for="brand in curCategory.brands" :key="brand.id">
          <RouterLink to="/">
            <img :src="brand.picture" alt="" />
            <div class="info">
              <p class="place">
                <i class="iconfont icon-dingwei"></i>{{ brand.place }}
              </p>
              <p class="name ellipsis">{{ brand.name }}</p>
              <p class="desc ellipsis-2">{{ brand.desc }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { findBrand } from '@/api/home'
export default {
  name: 'HomeCategory',
  setup () {
    const store = useStore()

    const brand = reactive({
      id: 'brand',
      name: '品牌',
      children: [
        {
          id: 'brand-children',
          name: '品牌推荐'
        }
      ],
      // 品牌数据
      brands: []
    })
    // 调用api获品牌推荐数据
    findBrand().then((data) => {
      brand.brands = data.result.slice(0, 6)
    })

    // 获取所有分类数据
    const menuList = computed(() => {
      // 只需要获取每个一级分类的2个二级分类
      const list = store.state.category.list.map((item) => {
        return {
          id: item.id,
          name: item.name,
          //   获取对应分类的商品
          goods: item.goods,
          //   为防止没有子类数据，调用数组方法报错
          children: item.children && item.children.slice(0, 2)
        }
      })
      list.push(brand)
      return list
    })

    // 用于记录当前选择的分类id
    const categoryId = ref(null)
    // 获取当前选择的分类
    const curCategory = computed(() => {
      return menuList.value.find((item) => item.id === categoryId.value)
    })

    return {
      menuList,
      categoryId,
      curCategory
    }
  }
}
</script>

<style lang="less" scoped>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover,&.active {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
  // 弹出层样式
    .layer {
    width: 990px;
    height: 500px;
    background: rgba(255,255,255,0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          text-align: left;
          &:hover {
            background: #e3f9f4;
          }
          img {
              width: 95px;
              height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
      // 品牌的样式
      li.brand {
        height: 180px;
        a {
          align-items: flex-start;
          img {
            width: 120px;
            height: 160px;
          }
          .info {
            p {
              margin-top: 8px;
            }
            .place {
              color: #999;
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>
