//这个是shopcart模块的vuex模块

import { reqAddOrUpdateShopCart ,reqshopCartInfo, reqUpdateCartIschecked,reqDeleteShopcart} from "@/api"

//vuex当中的4个核心概念  
const state = {
  //存数据
  shopCartInfo:[]

}

const mutations = {
  //直接修改数据
  RECEIVE_SHOPCARTINFO(state,shopCartInfo){
     state.shopCartInfo=shopCartInfo
  }
}

const actions = {
  //与组件当中用户对接
  //一般是异步发请求
  //提交mutations

  //async 函数称作异步函数，一般内部都是有异步操作的
  // async 函数返回值，一定是promise对象，不看return 
  // 返回的promise对象的成功和失败及结果，要看return
  // return的结果如果是非promise对象 那么promise一定是成功的，成功的结果就是return的结果
  // return的结果如果是promise对象，那么要看这个return后面的promise对象是成功的还是失败的
          //如果return的promise对象是成功的，那么promise对象就是成功的，成功的结果就是return的promise的成功结果
          //如果return的promise对象是失败的，那么promise对象就是失败的，失败的原因就是return的promise的失败原因

  // 如果没有return结果而是抛出错误，promise也是失败的，原因就是抛出的错误原因

  async addOrUpdateShopCart({commit},{skuId,skuNum}){
    const result = await reqAddOrUpdateShopCart(skuId,skuNum)
    
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },

   async getshopCartInfo({commit}){
    const result = await reqshopCartInfo()
    if(result.code === 200){
      commit('RECEIVE_SHOPCARTINFO',result.data)
    }
  },
  async updateCartIschecked({commit},{skuId,isChecked}){
      const result = await reqUpdateCartIschecked(skuId,isChecked)
      if(result.code ===200){
        return 'ok'
      }else{
        return Promise.reject(new Error('failed'))
      }
  },
  updateCartIscheckedAll({commit,getters,dispatch},isChecked){
    let promises = []
    getters.cartInfo.cartInfoList.forEach(item =>{
      if(item.isChecked === isChecked) return
      let promise = dispatch('updateCartIschecked',{skuId:item.skuId,isChecked})
      promises.push(promise)
    })
    return Promise.all(promises)
  },
  async deleteShopcart({commit},skuId){
    let result = await reqDeleteShopcart(skuId)
    if (result.code === 200) {
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },
  deleteShopcartAll({commit,getters,dispatch},ischecked){
    let promises = []
    getters.cartInfo.cartInfoList.forEach(item =>{
      if(item.ischecked !== ischecked) return
      let promise = dispatch('deleteShopcart',item.skuId)
      promises.push(promise)
    })
    return Promise.all(promises)
  },
   


}

const getters = {
  //后面用来简化数据的操作
    cartInfo(state){
      return state.shopCartInfo[0] || {}
    }
}

export default {
  state,
  mutations,
  actions,
  getters
}