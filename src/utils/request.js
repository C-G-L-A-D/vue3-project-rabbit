import axios from 'axios'
import store from '@/store'
import router from '@/router'

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  const { profile } = store.state.user
  if (profile.token) {
    // 设置请求头token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => res.data, err => {
  if (err.response && err.response.status === 401) {
    // 用户验证过期
    store.commit('user/setUser', {})
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    // encodeURIComponent 转换uri编码，防止解析地址出问题
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // 判断是添加url参数还是post请求体参数
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
