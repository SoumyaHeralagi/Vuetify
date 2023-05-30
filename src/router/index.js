import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPages from '../components/LoginPages'
import TheContactUs from '../components/TheContactUs'
import TheNavbar from '../components/TheNavbar'
import TheAbout from '../components/TheAbout'
import TheFooter from '../components/TheFooter'
import TheHome from '../components/TheHome'
import TheSignup from '../components/TheSignup'
import BookRide from '../components/BookRide'
import TheLogoutPage from '../components/TheLogoutPage'
import TheFacilities from '../components/TheFacilities'
import TheRides from '../components/TheRides'
import TheBookingDetails from '../components/TheBookingDetails'
import UpdateRide from '../components/UpdateRide'
import ForgotPass from '../components/ForgotPass'





Vue.use(VueRouter)

const routes = [
 
  {
    path: '/login',
    name: 'login',
    component: LoginPages
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
  {
    path: '/footer',
    name: 'TheFooter',
    component: TheFooter
  },
  {
    path: '/home',
    name: 'TheHome',
    component: TheHome
  },
  {
    path: '/signup',
    name: 'TheSignup',
    component: TheSignup
  },
  {
    path: '/bookRide',
    name: 'BookRide',
    component: BookRide
  },
  {
    path: '/logout',
    name: 'TheLogoutPage',
    component: TheLogoutPage
  },
  {
    path: '/facilities',
    name: 'TheFacilities',
    component: TheFacilities
  },
  {
    path: '/rides',
    name: 'TheRides',
    component: TheRides
  },
  {
    path: '/bookingDetails',
    name: 'TheBookingDetails',
    component: TheBookingDetails
  },
  {
    path: '/updateRide/:rideId',
    name: 'UpdateRide',
    component:UpdateRide 
  },
  {
    path: '/forgot',
    name: 'ForgotPass',
    component:ForgotPass 
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
