import axios from '../utils/axios';
// 年级列表
export function gradeList(){
    return axios({
        url:'/class/listGrade', //请求的地址
        method:'GET',
        params: {
        }
    })
}
// 班级列表
export function classList(cless){
    return axios({
        url:'/class/listClass', //请求的地址
        method:'GET',
        params: {
            pageNo: cless.pageNo,
            pageSize: cless.pageSize
        }
    })
}

// 科目列表
export function courseList(){
    return axios({
        url:'/class/listCourse', //请求的地址
        method:'GET',
        params: {
        }
    })
}
// 学年列表
export function yearList(){
    return axios({
        url:'/class/listYear', //请求的地址
        method:'GET',
        params: {
        }
    })
}
// 保存年级
export function saveGrade(data){
    return axios({
        url:'/class/saveGrade',
        method: 'POST',
        data
    })
}
// 保存班级
export function saveClass(data){
    return axios({
        url:'/class/saveClass',
        method: 'POST',
        data
    })
}
// 保存学科
export function saveCourse(data){
    return axios({
        url:'/class/saveCourse',
        method: 'POST',
        data
    })
}
// 保存学年
export function saveYear(data){
    return axios({
        url:'/class/saveYear',
        method: 'POST',
        data
    })
}

// 删除年级
export function delGrade(id) {
    return axios({
        url: '/class/delGrade',
        method: 'GET',
        params: {
            id: id
        }
    })
}

// 删除班级
export function delClass(id) {
    return axios({
        url: '/class/delClass',
        method: 'GET',
        params: {
            id: id
        }
    })
}

// 删除学科
export function delCourse(id) {
    return axios({
        url: '/class/delCourse',
        method: 'GET',
        params: {
            id: id
        }
    })
}

// 删除学年
export function delYear(id) {
    return axios({
        url: '/class/delYear',
        method: 'GET',
        params: {
            id: id
        }
    })
}
