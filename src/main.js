import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
import 'swiper/css/swiper.css'

import '@/mock/mockServer'
Vue.component('TypeNav',TypeNav)
import SlideLoop from '@/components/SlideLoop'
Vue.component('SlideLoop',SlideLoop)
import Pagination from '@/components/Pagination'
Vue.component('Pagination',Pagination)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
//这一生在你的风景里,我是谁 __努力活着
