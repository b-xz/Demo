import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// Vue.use(echarts)

Vue.config.productionTip = false

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmOGE0NmE3NS00N2M4LTQ2ZTYtYmNjZS05MDI4MjNkMjkwZDAiLCJpZCI6MTc0MjQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzIyNDY5Nzh9.tZgOG5apR_z4nL_rETDVHU1h9fLXsYgugRxw32_VgRs";
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
