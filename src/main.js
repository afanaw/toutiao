import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router'
import store from './store'

// 加载全局样式
import './styles/index.less'

Vue.config.productionTip = false

// 创建Vue根实例，将 router、 store配置到根实例中
// 把App根组件渲染到#app节点
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
