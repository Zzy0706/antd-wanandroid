// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Button } from 'ant-design-vue'
import router from './router'
import axiosApi from './api/api'

Vue.component(Button.name, Button)
Vue.config.productionTip = false
Vue.prototype.$axiosApi = axiosApi

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
