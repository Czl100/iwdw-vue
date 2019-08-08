import Vue from 'vue';
import Meta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false
Vue.use(Meta);

new Vue({
  router,
  store,
  render: h => h(App),

  // 与渲染
  mounted(){
    document.dispatchEvent(new Event('render-event'));
  }
}).$mount('#app');
