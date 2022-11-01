import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

export default createStore({
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedState({
      key: 'rabbit-store',
      paths: ['user', 'cart']
    })
  ]
})
