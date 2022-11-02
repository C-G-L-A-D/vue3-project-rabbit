import request from '@/utils/request'

/**
 * 获取首页头部导航分类数据
 */
export const getAllCategory = () => {
  return request('/home/category/head', 'get')
}
