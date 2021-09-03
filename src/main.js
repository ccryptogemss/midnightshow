import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDaEsSwDIbCdEMRI5CjLM3XNOqgRFTtGAE",
  authDomain: "the-midnight-show.firebaseapp.com",
  projectId: "the-midnight-show",
  storageBucket: "the-midnight-show.appspot.com",
  messagingSenderId: "847945166846",
  appId: "1:847945166846:web:8c4781b8dc617c3caddaaf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Application styles
import '@/styles/main.scss';

import 'jquery';
import 'bootstrap';
import '../vendors/ventcamp.js';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
