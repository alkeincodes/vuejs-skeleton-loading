import Vue from 'vue'
import App from './App.vue'
import VSkeleton from './index'

Vue.config.productionTip = false

Vue.use(VSkeleton)

new Vue({
  render: h => h(App),
}).$mount('#app')
