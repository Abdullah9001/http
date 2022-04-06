import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://http-request-7f125-default-rtdb.firebaseio.com/data.json';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
