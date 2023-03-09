import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPages from '../components/LoginPages'
import TheDashboard from '../components/TheDashboard'
import AddRide from '../components/AddRide'
import RideDetails from '../components/RideDetails'
import TheContactUs from '../components/TheContactUs'
import TheNavbar from '../components/TheNavbar'
import TheAbout from '../components/TheAbout'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/login',
    name: 'login',
    component: LoginPages
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: TheDashboard
  },
  {
    path: '/addride',
    name: 'addride',
    component: AddRide
  },
  {
    path: '/rideDetails',
    name: 'rideDetails',
    component: RideDetails
  },
  {
    path: '/contact',
    name: 'ThecontactUs',
    component: TheContactUs
  },
  {
    path: '/nav',
    name: 'TheNavbar',
    component: TheNavbar
  },
  {
    path: '/about',
    name: 'TheAbout',
    component: TheAbout
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
