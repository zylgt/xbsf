import axios from '../utils/axios';
// 字典列表
export function getListByType(type){
    return axios({
        url:'/dict/listByType', //请求的地址
        method:'GET',
        params: {
            type: type
        }
    })
}
// 保存字典
export function saveDict(data){
    return axios({
        url:'/dict/save',
        method: 'POST',
        data
    })
}
// 查询单个字典详情
export function getById(id){
	 return axios({
        url: '/dict/getById',
        method:'GET',
        params: {
            id: id
        }
    }); 
}
// 删除单个字典
export function delById(id) {
    return axios({
        url: '/dict/delById',
        method: 'GET',
        params: {
            id: id
        }
    })
}
