import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import { VueSpinners } from '@saeris/vue-spinners'
import router from '@/router'
import { dollarFilter, percentFilter } from '@/filter'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

export const eventBus = new Vue ()


Vue.use(Chartkick.use(Chart))

Vue.use(VueSpinners)

Vue.filter('dollar', dollarFilter)
Vue.filter('dollarPercent', percentFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
