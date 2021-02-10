import {reqCategoryList,reqBannerList,reqFloorList} from '@/api'

const state = {
  categoryList:[],
  bannerList:[],
  floorList:[]
}
const actions = {
  async getCategoryList({commit}){
   const result= await reqCategoryList()
   if(result.code ===200){
     commit('RECEIVE_CATEGORYLIST',result.data)
   }
  },

  async getBannerList({commit}){
    const result = await reqBannerList()
    if(result.code === 200){
      commit('RECEIVE_GETBANNERLIST',result.data)
    }
  },
  async getFloorList({commit}){
    const result = await reqFloorList()
    if(result.code === 200){
      commit('RECEIVE_GETFLOORLIST',result.data)
    }
  },

}
const mutations = {
  //三级列表
  RECEIVE_CATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
  },
  //接收轮播列表
  RECEIVE_GETBANNERLIST(state,bannerList){
    state.bannerList = bannerList
  },
  //接收楼梯列表
  RECEIVE_GETFLOORLIST(state,floorList){
    state.floorList = floorList
  }

}





const getters = {
  
}

export default {
  state,
  mutations,
  actions,
  getters
}