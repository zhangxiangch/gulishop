
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
//二次封装axios
const service = axios.create({
  baseURL:'/api',
  timeout:20000,
})

//添加进度条信息功能,nprogress
// Add a request interceptor
service.interceptors.request.use(
  (config)=>{
    let userTempId= store.state.user.userTempId
    if(userTempId){
      config.headers.userTempId=userTempId
    }
    NProgress.start()
    let token = store.state.user.token
    if(token){
      config.headers.token = token 
    }
    return config//config指的请求报文
  }
);

// Add a response interceptor
service.interceptors.response.use(
  (response)=>{
    NProgress.done();
    return response.data
  },
  (error)=>{
    NProgress.done();
    alert('发送ajax请求失败'+error.message||'未知错误')
    // return Promise.reject(new Error('发送ajax请求失败'))
    //返回一个pendding状态的promise
    return new Promise(()=>{
    })
  }
);
export default service