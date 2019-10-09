// 引入axios库
import axios from 'axios'

// 封装axios请求
const request = axios.create({
    // 动态获取前缀
    baseURL: process.env.VUE_APP_BASE_API,
    // 请求超时时间
    timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(config =>{
    // 请求拦截
    return config
},error =>{
    return Promise.reject(error);
})

// 响应拦截器
request.interceptors.response.use(response =>{
    return response
},error =>{
    return Promise.reject(error);
})

export default request // 导出自定义创建的axios对象

