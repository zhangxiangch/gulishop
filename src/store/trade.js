import {reqTradeInfo} from '@/api/index'
const state = {
    tradeInfo:{}
}
const actions = {
    async getTradeInfo({commit}){
      const result = await reqTradeInfo()
      if(result.code === 200){
        commit('RECEIVE_TRADEINFO',result.data)
      }
    }
}
const mutations = {
   RECEIVE_TRADEINFO(state,tradeInfo){
      state.tradeInfo = tradeInfo
   }
}
const getters = {
  detailArrayList(state){
    return state.tradeInfo.detailArrayList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}