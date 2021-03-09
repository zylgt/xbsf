import Vue from 'vue'
import Router from 'vue-router'

const qx50 = () => import('../pages/qx50')
const qx50l = () => import('../pages/qx50l')
const mini3d = () => import('../pages/mini3d')
const miniprogram = () => import('../pages/miniprogram')
const manage = () => import('../pages/manage')
const login = () => import('../pages/login')

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
        path:'/miniprogram',
        component: miniprogram,
        name:'miniprogram'
      },{
        path:'/qx50',
        component: qx50,
        name:'qx50'
      },{
        path:'/qx50l',
        component: qx50l,
        name:'qx50l'
      },{
        path:'/mini3d',
        component: mini3d,
        name:'mini3d'
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
