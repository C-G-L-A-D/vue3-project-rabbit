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
      // 给一级分类添加控制二级分类显示隐藏的标志
      result.forEach(element => {
        element.open = false
      })
      console.log(result)
      content.commit('setList', result)
    }
  },
  mutations: {
    // 设置分类集合
    setList (state, payload) {
      state.list = payload
    },
    // 用于显示二级分类
    showSubCategory (state, categoryId) {
      // 只需要修改传进来的一级分类的open属性
      const category = state.list.find(item => item.id === categoryId)
      category.open = true
    },
    // 用于隐藏二级分类
    hideSubCategory (state, categoryId) {
      const category = state.list.find(item => item.id === categoryId)
      category.open = false
    }
  }
}
