import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import Vueresource from 'vue-resource'
Vue.use(Vueresource)

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

 var car=JSON.parse(localStorage.getItem('car'||'[]'))

var store=new Vuex.Store({
state:{
	car:car,
	ca:'',
	i:''
},
mutations:{


addTo(state,sz) {

  // this.car=sz;
      state.car.unshift(sz)
       console.log(state.car)
      localStorage.setItem('car', JSON.stringify(state.car))
   

},
  delTo(state,i){
    
   state.car.splice(i,1)
console.log(i)
   localStorage.setItem('car', JSON.stringify(state.car))
  },
    remTo(state,i){
    
             state.ca=state.car[i]

             state.i=i


  },
  qrTo(state,qr){
                   state.car[state.i]=qr

                      localStorage.setItem('car', JSON.stringify(state.car))

  }

 },

 getters:{}


})

new Vue({
  render: h => h(App),
  	router,
  	  store,
}).$mount('#app')






