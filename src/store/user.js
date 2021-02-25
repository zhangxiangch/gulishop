import {getUserTempId} from '@/utils/userabout'
import {reqUserRegister,reqGetCode, reqUserLogin,reqGetUserInfo, reqUserLogout,reqUserAddressList} from '@/api'
const state ={
  userTempId:getUserTempId(),
  code:'',
  token:localStorage.getItem('TOKEN_KEY'),
  userInfo:{},
  userAddressList:[]
}
const mutations ={
  RECEIVE_USERADDRESSLIST(state,userAddressList){
    state.userAddressList = userAddressList
  },
  RECEIVE_CODE(state,code){
    state.code = code
  },
  RECEIVE_TOKEN(state,token){
    state.token = token
  },
  RECEIVE_USERINFO(state,userInfo){
    state.userInfo = userInfo
  },
  // RESET_TOKEN(state){
  //   state.token = ''
  //   state.userInfo={}
  // },

  RESET_USER(state){
    state.token='',
    state.userInfo={}
  }
}
const actions ={
  async getCode({commit},phone){
    let result = await reqGetCode(phone)
    if(result.code === 200){
      commit('RECEIVE_CODE',result.data)
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },


  async userRegister({commit},userInfo){
    const result =await reqUserRegister(userInfo)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
   },
   async userLogin({commit},userInfo){
      const result = await reqUserLogin(userInfo)
      if(result.code === 200){
        commit('RECEIVE_TOKEN',result.data.token)
        localStorage.setItem('TOKEN_KEY',result.data.token)
        return 'ok'
      }else{
        return Promise.reject(new Error('failed'))
      }
   },
   async getUserInfo({commit}){
      const result = await reqGetUserInfo()
      if(result.code === 200){
        commit ('RECEIVE_USERINFO',result.data)
        return 'ok'
      }else{
        return Promise.reject(new Error('failed'))
      }
   },
   //用户过期
   async clearToken({commit}){
      commit('RESET_USER')
      localStorage.removeItem('TOKEN_KEY')
   },
   //用户退出登录
   async userLogout({commit}){
      const result = await reqUserLogout()
      if(result.code === 200){
        localStorage.removeItem('TOKEN_KEY')
        commit('RESET_USER')
        return 'ok'
      }else{
        return Promise.reject(new Error('failed'))
      }
   },
   async getUserAddressList({commit}){
     const result = await reqUserAddressList()
     if(result.code === 200){
       commit('RECEIVE_USERADDRESSLIST',result.data)
     }
   }


}
const getters ={

}

export default {
  state,
  mutations,
  actions,
  getters
}