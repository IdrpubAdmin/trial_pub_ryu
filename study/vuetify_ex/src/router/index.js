import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '@/views/DashBoard'
import GridSystem from '@/views/GridSystem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* vueRouter 버전 문제로 인한 대체코드, 하지만 다운그레이드 버전으로 해결 */
// import {createRouter, createWebHistory} from "vue-router";

// const DashBoard = () => import('../views/DashBoard')
// const GridSystem = () => import('../views/GridSystem')

/*
const router = createRouter({
  history: createWebHistory(),
  routes
})
 */

export default router
