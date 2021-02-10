import {reqSearchInfo} from '@/api'
const state = {
  searchInfo:{}
}
const actions = {
  async getSearchInfo({commit},searchParams){
    const result = await reqSearchInfo(searchParams)
    if (result.code === 200) {
      commit('RECEIVE_SEARCHINFO',result.data)
    }
  }
}
const mutations = {
  RECEIVE_SEARCHINFO(state,searchInfo){
    state.searchInfo = searchInfo
  }
}
const getters = {
  attrsList(state){
    return state.searchInfo.attrsList || []
  },
  goodsList(state){
    return state.searchInfo.goodsList || []
  },
  trademarkList(state){
    return state.searchInfo.trademarkList || []
  }
}


export default{
  state,
  actions,
  mutations,
  getters
 
}