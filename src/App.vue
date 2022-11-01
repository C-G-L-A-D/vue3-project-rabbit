<template>
  <RouterView />
</template>

<script>
import request from '@/utils/request'
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const fn = () => {
      request('/member/profile', 'get')
    }
    const store = useStore()
    const setUser = () => {
      store.commit('user/setUser', { account: '2000' })
    }
    return {
      fn,
      setUser
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
