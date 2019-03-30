import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Users from './components/Users'
Vue.config.productionTip = false

// Vue.component('users',Users);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
