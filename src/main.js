import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
import 'swiper/css/swiper.css'
// import '@/api'
import * as API from '@/api'
import '@/mock/mockServer'
import { Button, MessageBox ,Message} from 'element-ui'
import VueLazyload from 'vue-lazyload'
import loading from '@/assets/loading.gif'
import '@/utils/validate'
Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
  loading,  // 指定未加载得到图片之前的loading图片
})


Vue.use(Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;


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
    Vue.prototype.$API = API
  },
  render: h => h(App),
}).$mount('#app')
//这一生在你的风景里,我是谁 __努力活着
