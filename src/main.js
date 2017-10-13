// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import SignUp from './components/SignUp'
import Info from './components/Info'

Vue.config.productionTip = false

Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: SignUp},
    {path: '/info', component: Info}
  ]
});
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
