import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/Home.vue'
import LoginComponent from '../components/Login.vue'
import SignupComponent from '../components/Signup.vue'
import ProfileComponent from '../components/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeComponent
    },
    {
      path: '/home',
      component: HomeComponent
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/signup',
      component: SignupComponent
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileComponent
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/login', '/signup', '/home']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/login')
  } else {
    next()
  }
})

export default router
