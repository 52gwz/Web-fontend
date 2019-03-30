import Vue from "vue";
import App from "./App.vue";
// Vue.config.productionTip = false;
// Vue.http.options.emulateJSON = true;
// Vue.http.options.headers = {
//   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
// };
new Vue({
  render: h => h(App)
}).$mount("#app");
