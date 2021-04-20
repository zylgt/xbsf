import axios from '../utils/axios';
// 登录
export function login(data){
    let form = new FormData()
    let keys = Object.keys(data)
    keys.forEach(key => {
        form.append(key, data[key])
    })
    return axios({
        url:'/auth/login', //请求的地址
        method:'POST',
        data: form
    })
}
// 获取列表
export function getList(data){
    return axios({
        url:'/infinitiConsult/getList',
        method:'POST',
        data
    })
}
// 下载
export function downList(data){
	 return axios({
        url: '/infinitiConsult/download',
        method:'POST',
        data
    }); 
}
