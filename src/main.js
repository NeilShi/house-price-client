import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CommunitySearch from './components/CommunitySearch.vue'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/community/search',
      component: CommunitySearch
    }
  ]
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
