import Vue from 'vue'
import Router from 'vue-router'
import Button from './components/button'
import Tips from './components/tips'
import Badge from './components/badge'
import Loading from './components/loading'
import Scroll from './components/scroll'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/button', component: Button },
    { path: '/tips', component: Tips },
    { path: '/badge', component: Badge },
    { path: '/loading', component: Loading },
    { path: '/scroll', component: Scroll }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
