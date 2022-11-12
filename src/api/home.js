import request from '@/utils/request'

// 获取品牌数据
export const findBrand = (limit) => {
  return request('/home/brand', 'get', { limit })
}

// 获取轮播图图片
export const findBanner = () => {
  return request('/home/banner', 'get')
}
