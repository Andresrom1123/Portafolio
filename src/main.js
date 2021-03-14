import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n.js'
import { BootstrapVue } from 'bootstrap-vue'
import VueClipboard from 'vue-clipboard2'
import router from './router'


Vue.use(BootstrapVue)
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
