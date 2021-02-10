import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
Vue.use(VueRouter)


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
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace= function(location,onResolved,onRejected){
  if(onResolved ===undefined && onRejected ===undefined){
    return originReplace.call(this,location).catch(()=>{
    })
  }else{
    return originReplace.call(this,location,onResolved,onRejected)
  }
}

//需要向外暴露
 const router =new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})


router.beforeEach(async (to, from, next) => {
  const token = store.state.user.token
  const userInfo = store.state.user.userInfo.name
  if(token){
    if(to.path ==='login'){
      next('/')
    }else{
      if(userInfo){
        next()
      }else{
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          store.dispatch('clearToken')
          next('/login')
        }
      }
    }
  }else{
    next()
  }
})
export default router