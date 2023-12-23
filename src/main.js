import Vue from 'vue'
import App from './App.vue'
import router from "./router/router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import emailjs from '@emailjs/browser';
// 引入百度地图（不用再到html中导入） 
import BaiduMap from 'vue-baidu-map'


Vue.use(BaiduMap, {
  ak: '',
})
Vue.use(emailjs);
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
