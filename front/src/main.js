import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import showdown from 'showdown'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$api_root = (process.env.API_ROOT !== undefined ? process.env.API_ROOT : '')
Vue.prototype.$showdown = new showdown.Converter({
  headerLevelStart: 2
})

var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
vm.$mount('#app')
