import {reqDetailInfo} from '@/api/index'
const state = {
    detailInfo:{}
}
const actions = {
    async getDetailInfo({commit},goodsId){
      const result = await reqDetailInfo(goodsId)
      if (result.code=== 200) {
        commit('RECEIVE_DETAILINFO',result.data)
      }
    }
}
const mutations = {
    RECEIVE_DETAILINFO(state,detailInfo){
      state.detailInfo= detailInfo
    }
}
const getters = {
  categoryView(state){
    return state.detailInfo.categoryView ||{}
  },
  skuInfo(state){
    return state.detailInfo.skuInfo|| {}
  },
  spuSaleAttrList(state){
    return state.detailInfo.spuSaleAttrList|| []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}