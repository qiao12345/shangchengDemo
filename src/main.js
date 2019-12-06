import Vue from 'vue'
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(VueResource)
Vue.use(Lazyload)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
