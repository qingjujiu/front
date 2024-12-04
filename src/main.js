// import './static/js/jquery-3.7.0.min.js';
// import './static/js/viewport.jquery.js';
// import './static/js/bootstrap.bundle.min.js';
// import './static/js/jquery.nice-select.min.js';
// import './static/js/swiper-bundle.min1.js';
// import './static/js/jquery.magnific-popup.min.js';
// import './static/js/jquery.waypoints.js';
// import './static/js/jquery.counterup.min.js';
// import './static/js/wow.min1.js';
// import './static/js/main1.js';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'





const app = createApp(App)
app.use(axios).use(ElementPlus).use(router).mount('#app')
 
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
