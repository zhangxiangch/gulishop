import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
//这一生在你的风景里,我是谁 __努力活着
