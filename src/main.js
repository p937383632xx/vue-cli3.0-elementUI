import Vue from "vue";
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";

Vue.use(ElementUI);

// 动态判断是生产环境还是开发环境
Vue.config.productionTip = process.env.NODE_ENV==='production';

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
