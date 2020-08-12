import axios from 'axios'
import qs from 'qs'
const instance = axios.create({

})
// 请求拦截器
instance.interceptors.request.use(config =>{
    config.data = qs.stringify(config.data)
    return config
})
// 响应拦截器
instance.interceptors.response.use( 
    response => response.data,
    error =>{
        console.log(error)
        return new Promise(()=>{})
    }
)

export default instance