import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'

//修改添加PUSH的属性
const originPush = VueRouter.prototype.push
VueRouter.prototype.push= function(location,onResolved,onRejected){
  if(onResolved ===undefined && onRejected ===undefined){
    return originPush.call(this,location).catch(()=>{})
  }else{
    return originPush.call(this,location,onResolved,onRejected)
  }
}
//修改replace的属性


//需要向外暴露
export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/login',
      component:Login,
      meta:{
        isHidden:true
      }
    },
    {
      path:'/search/:keyword?',
      component:Search,
      name:'search',
      props:(route)=>{
        return {keyword:route.params.keyword,keyword1:route.query.keyword1}
      }
    },
    {
      path:'/register',
      component:Register,
      meta:{
        isHidden:true
      }
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
})