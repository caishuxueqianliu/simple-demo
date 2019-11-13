import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)
Vue.config.productionTip = false

 import './lib/mui/css/mui.min.css'
 import './lib/golbal.css'
import './lib/mui/css/icons-extra.css'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header)
import 'mint-ui/lib/style.css'

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import { PaletteButton } from 'mint-ui';
Vue.component(PaletteButton.name, PaletteButton);

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
// import { Search } from 'mint-ui';
// Vue.component(Search.name, Search);

new Vue({
  render: h => h(App),
  	router,
}).$mount('#app')






