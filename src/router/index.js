import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const Login = () => import('../views/Login.vue')
const Categories = () => import('../views/Categories.vue')
const DetailRecords = () => import('../views/DetailRecords.vue')
const History = () => import('../views/History.vue')
const Planning = () => import('../views/Planning.vue')
const Record = () => import('../views/Record.vue')
const Register = () => import('../views/Register.vue')
const Profile = () => import('../views/Profile.vue')
// const Home = () => import('../views/Home.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Home.vue'),

  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: Login
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout: 'main', auth: true},
    component: Categories
  },
  {
    path: '/detailrecords/:id',
    name: 'detailrecords',
    meta: {layout: 'main', auth: true},
    component: DetailRecords
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main', auth: true},
    component: History
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main', auth: true},
    component: Planning
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout: 'main', auth: true},
    component: Record
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main', auth: true},
    component: Profile
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   meta: {layout: 'main'},
  //   component: Home
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router
