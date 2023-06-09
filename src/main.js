import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import './assets/less/index.less';
import echarts from 'echarts'
import img from './lib/img'
import utils from "./lib/utils";
import axios from "axios";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$echarts = function (el) {
    return echarts.init(el, null, {renderer: 'svg'})
}
Vue.prototype.$images = img
Vue.config.productionTip = false;
Vue.prototype.$axios = axios
Vue.use(iView);
Vue.use(utils)
Vue.use(ElementUI)
new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
