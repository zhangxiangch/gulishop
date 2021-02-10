//接口请求函数
// import axios from 'axios'
import request from './ajax'
import mockAjax from './mockAjax'

//请求三级列表的接口
export const reqCategoryList= ()=>{
  return request({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}

//请求banner模拟接口数据函数
export const reqBannerList = ()=>{
  return mockAjax({
    url:'/banner',
    method:'get'
  })
}

export const reqFloorList = ()=>{
  return mockAjax({
    url:'/floor',
    method:'get'
  })
}

//search页数据请求函数
export const reqSearchInfo = (searchParams)=>{
  return request({
    url:'/list',
    method:'post',
    data:searchParams
  })
}

//detail请求函数 /api/item/{ skuId }
export const reqDetailInfo= (skuId)=>{
  return request({
    url:`/item/${skuId}`,
    method:'get'
  })
}
///api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>{
    return request({
      url:`/cart/addToCart/${ skuId }/${ skuNum }`,
      method:'post'
    })

}

export const reqshopCartInfo = ()=>{
  return request({
    url:'/cart/cartList',
    method:'get'
  })
}
///api/cart/checkCart/{skuId}/{isChecked}
export const reqUpdateCartIschecked= (skuId,isChecked)=>{
  return request({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
  })
}
//删除购物车/api/cart/deleteCart/{skuId}
 export const reqDeleteShopcart = (skuId)=>{
    return request({
      url:`/cart/deleteCart/${skuId}`,
      method:'delete'
    })
 }

//  /api/user/passport/register 用户注册

    export const reqUserRegister =  (userInfo)=>{
      return request({
        url:'/user/passport/register',
        method:'post',
        data:userInfo
      })
    }
    //获取验证码
    export const reqGetCode = (phone) => {
      return request({
        url:`/user/passport/sendCode/${phone}`,
        method:'get'
      })
    }

    export const reqUserLogin=(userInfo)=>{
      return request({
        url:'/user/passport/login',
        method:'post',
        data:userInfo
      })
    }
//根据token获取用户信息
// api/user/passport/auth/getUserInfo
export const reqGetUserInfo =  ()=>{
  return request({
    url:'/user/passport/auth/getUserInfo',
    method:'get'
  })
}

//请求退出登录
export const reqUserLogout = ()=>{
  return request({
    url:'/user/passport/logout',
    method:'get'
  })
}