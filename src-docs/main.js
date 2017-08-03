// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FreeUI from 'free-ui'
import router from './router'

Vue.use(FreeUI)

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
