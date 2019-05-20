import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import firebase from 'firebase';

require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBx7he4Ww6H_zQpwh7zT0GplJcva9q4naI",
    authDomain: "screenfleet-2c77f.firebaseapp.com",
    databaseURL: "https://screenfleet-2c77f.firebaseio.com",
    projectId: "screenfleet-2c77f",
    storageBucket: "screenfleet-2c77f.appspot.com",
    messagingSenderId: "154709207643",
    appId: "1:154709207643:web:85cae06eadf6991e"
  };
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;
window.firebase = firebase;


Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
