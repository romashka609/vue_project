import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filter/date.filter'
import currencyFilter from './filter/currency.filter'
import localizeFilter from './filter/localize.filter'
import tiiltipDirective from '@/directives/tooltip.directive'
import messagePlugin from './utils/message.plugin'
import titlePlugin from './utils/title.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/css/materialize.min.css'

import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/database'
import tooltipDirective from '@/directives/tooltip.directive'



Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp ({
  apiKey: "AIzaSyAdPjxVUDyO1gTC5jkhEStykCNGgzeefg4",
  authDomain: "vue-js-c19f4.firebaseapp.com",
  projectId: "vue-js-c19f4",
  storageBucket: "vue-js-c19f4.appspot.com",
  messagingSenderId: "566450974800",
  appId: "1:566450974800:web:510d6778cf82e08919e155",
  measurementId: "G-S70L86V16N"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  
})


