import axios from 'axios';
import qs from 'qs';
let http = {
        post: '',
        get: '',
        delete: ''
    }
    // axios.defaults.headers.common['apiToken'] = token
axios.interceptors.request.use(function(config) {
        let token = sessionStorage.getItem('token')
        if (token) {
            config.headers.common['apiToken'] = token //将token加入响应头中
        }
        return config
    }, function(error) {
        return Promise.reject(error)
    })
    //axios response拦截
axios.interceptors.response.use((res) => {
    return Promise.resolve(res);
}, (error) => {
    if (error.response.status === 401) { //状态码为401时，清空token路由重定向到login页
        sessionStorage.removeItem('token')
        window.location.href = '/Login'
    }
    return Promise.reject(error);
});
http.post = function(api, data) {
    let params = qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.post('http://192.168.1.193:8081' + api, params).then(res => {
            resolve(res)
        })
    })
}

http.get = function(api, data) {
    let params = qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.get('http://192.168.1.193:8081' + api, params).then(res => {
            resolve(res)
        })
    })
}

http.delete = function(api, data) {
    let params = qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.delete('http://192.168.1.193:8081' + api, params).then(res => {
            resolve(res)
        })
    })
}
export default http