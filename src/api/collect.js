import axios from '../utils/axios';
// 采集任务列表
export function getListCollect(){
    return axios({
        url:'/collect/listAll', //请求的地址
        method:'GET',
        params: {
        }
    })
}
// 保存采集任务
export function saveCollect(data){
    return axios({
        url:'/collect/save',
        method: 'POST',
        data
    })
}

export function getById(id) {
    return axios({
        url:'/collect/getById',
        method: 'GET',
        params: {
            id: id
        }
    })
}

export function delById(id) {
    return axios({
        url:'/collect/delById',
        method: 'GET',
        params: {
            id: id
        }
    })
}
