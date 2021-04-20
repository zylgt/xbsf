import Vue from 'vue'
import Router from 'vue-router'

const manage = () => import('../pages/manage')
const login = () => import('../pages/login')

const home = () => import('../pages/home/home')

const files = () => import('../pages/files')

const teacherHome = () => import('../pages/teacherHome')

const honour = () => import('../pages/total/honour')

const plan1 = () => import('../pages/teacherPlan/plan1')

const all = () => import('../pages/anlayse/all')
const achievement = () => import('../pages/anlayse/achievement')
const target = () => import('../pages/anlayse/target')
const compare = () => import('../pages/anlayse/compare')
const comment = () => import('../pages/anlayse/comment')

const gather = () => import('../pages/compare/gather')
const task = () => import('../pages/compare/task')
const review = () => import('../pages/compare/review')

const teacher = () => import('../pages/datum/teacher')
const indicator = () => import('../pages/datum/indicator')

const collectProgress = () => import('../pages/prograss/collectProgress')
const collectInfo = () => import('../pages/prograss/collectInfo')

const personal = () => import('../pages/personal/personal')

const schoolYear = () => import('../pages/schoolYear/schoolYear')
const course = () => import('../pages/course/course')
const grade = () =>  import('../pages/grade/grade')
const cless = () => import('../pages/cless/cless')
const user = () => import('../pages/user/user')
const dict = () => import('../pages/dict/dict')
const basicInfo = () => import('../pages/basicInfo/basicInfo')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }, {
      path: '/manage',
      name: 'manage',
      component: manage,
      children:[{
        path: '/schoolYear',
        component: schoolYear,
        name: 'schoolYear'
      },
      {
        path: '/course',
        component: course,
        name: 'course'
      },{
        path: '/grade',
        component: grade,
        name: 'grade'
      },{
        path: '/cless',
        component: cless,
        name: 'cless'
      },{
        path: '/user',
        component: user,
        name: 'user'
      },{
        path: '/dict',
        component: dict,
        name: 'dict'
      },{
        path: '/basicInfo',
        component: basicInfo,
        name: 'basicInfo'
      },
      {
        path:'/home',
        component: home,
        name:'home'
      },{
        path:'/files',
        component: files,
        name:'files'
      },{
        path:'/teacherHome',
        component: teacherHome,
        name:'teacherHome'
      },{
        path:'/honour',
        component: honour,
        name:'honour'
      },{
        path:'/study',
        component: honour,
        name:'study'
      },{
        path:'/result',
        component: honour,
        name:'result'
      },{
        path:'/open',
        component: honour,
        name:'open'
      },{
        path:'/base',
        component: honour,
        name:'base'
      },{
        path:'/plan1',
        component: plan1,
        name:'plan1'
      },{
        path:'/plan2',
        component: plan1,
        name:'plan2'
      },{
        path:'/plan3',
        component: plan1,
        name:'plan3'
      },{
        path:'/plan4',
        component: plan1,
        name:'plan4'
      },{
        path:'/plan5',
        component: plan1,
        name:'plan5'
      },{
        path:'/plan6',
        component: plan1,
        name:'plan6'
      },{
        path:'/all',
        component: all,
        name:'all'
      },{
        path:'/achievement',
        component: achievement,
        name:'achievement'
      },{
        path:'/target',
        component: target,
        name:'target'
      },{
        path:'/compare',
        component: compare,
        name:'compare'
      },{
        path:'/comment',
        component: comment,
        name:'comment'
      },{
        path:'/gather',
        component: gather,
        name:'gather'
      },{
        path:'/task',
        component: task,
        name:'task'
      },{
        path:'/review',
        component: review,
        name:'review'
      },{
        path:'/teacher',
        component: teacher,
        name:'teacher'
      },{
        path:'/indicator',
        component: indicator,
        name:'indicator'
      },{
        path:'/collectProgress',
        component: collectProgress,
        name:'collectProgress'
      },{
        path:'/collectInfo',
        component: collectInfo,
        name:'collectInfo'
      },{
        path:'/personal',
        component: personal,
        name:'personal'
      }]
    }
  ]
})
