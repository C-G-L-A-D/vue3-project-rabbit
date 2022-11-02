// 分类模块
import { topCategory } from '@/api/navs/constants'
import { getAllCategory } from '@/api/navs/category'
export default {
  namespaced: true,
  state () {
    return {
      // 初始化默认数据为对象，防止页面白屏
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // 调用api接口向后台加载数据
  actions: {
    // 获取分类全部数据
    async getListActions (content) {
      const { result } = await getAllCategory()
      console.log(result)
      content.commit('setList', result)
    }
  },
  mutations: {
    // 设置分类集合
    setList (state, payload) {
      state.list = payload
    }
  }
}
