import axios from '../utils/axios';
// 用户列表
export function searchList(user){
    return axios({
        url:'/user/search', //请求的地址
        method:'GET',
        params: {
            type: user.type,
            searchKey: user.searchKey,
            pageNo: user.pageNo,
            pageSize: user.pageSize
        }
    })
}
// 保存用户
export function saveUser(user){
    return axios({
        url:'/user/saveOrUpdate',
        method: 'POST',
        data: {
            id: user.id,
            type: user.type,
            name: user.name,
            code: user.code,
            account: user.account,
            password: user.password,
            classIds: user.classIds,
            sex: user.sex,
            status: user.status
        }
    })
}
// 查询单个用户
export function getById(id){
	 return axios({
        url: '/user/getById',
        method:'GET',
        params: {
            id: id
        }
    }); 
}
// 删除用户
export function delById(id) {
    return axios({
        url: '/user/delById',
        method: 'GET',
        params: {
            id: id
        }
    })
}
