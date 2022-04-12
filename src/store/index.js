import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  // isNavShow 通过它来控制底部导航条显示和隐藏
	  isNavShow:true
  },
  getters: {
	  // 获取改变后的状态
	  showNav(start){
		  return start.isNavShow
	  }
  },
  // 管理真正的状态
  mutations: {
	  // 接收提交，真正状态isNavShow的状态
	  SHOWNAV(start){
		  start.isNavShow = true
	  },
	  HIDENAV(start){
		  start.isNavShow = false
	  }
  },
  actions: {
	  // 提交显示底部导航条
	  SHOWNAV({commit}){
		  commit("SHOWNAV")
	  },
	  HIDENAV({commit}){
		  commit("HIDENAV")
	  }
  },
  modules: {
  }
})
