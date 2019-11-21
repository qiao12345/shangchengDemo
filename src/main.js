import Vue from 'vue'
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.component(Header.name, Header)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
