<template>
  <ul class="app-header-navs">
    <li class="home"><router-link to="/">首页</router-link></li>
    <li>
      <a href="#">美食</a>
      <!-- 子级菜单分类导航布局 -->
      <div class="layout">
        <ul>
          <li v-for="item in 10" :key="item">
            <a href="javascript:;">
              <img
                src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/img/category%20(4).png"
                alt="图标"
              />
              <p>果干</p>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li><a href="#">餐厨</a></li>
    <li><a href="#">艺术</a></li>
    <li><a href="#">电器</a></li>
    <li><a href="#">居家</a></li>
    <li><a href="#">洗护</a></li>
    <li><a href="#">孕婴</a></li>
    <li><a href="#">服装</a></li>
    <li><a href="#">杂志</a></li>
  </ul>
</template>

<script>
export default {
  name: 'AppHeaderNav'
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
      // 子级菜单样式
      > .layout {
        height: 132px;
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
  }
}
</style>
