import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './assets/base.css'
import '@bilibili/sns-login/dist/sns-login.css'

Vue.config.productionTip = false
Vue.use(ViewUI)

console.log('ddddd')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
