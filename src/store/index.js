import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // localStorage很强大，api简单是一个本地存储的api使用的时候最好用try/catch因为用户如果关闭
  // 本地存储功能那localStorage就会出错代码就不会运行
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations,
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
