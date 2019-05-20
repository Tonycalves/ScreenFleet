import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import firebase from 'firebase';

require("firebase/firestore");

var firebaseConfig = {
    apiKey: "YOUR_APIKEY",
    authDomain: "YOUR_AUTHDOMAIN",
    databaseURL: "YOUR_DATABASEURL",
    projectId: "YOUR_PROJECTID",
    storageBucket: "YOUR_STORAGEBUCKET",
    messagingSenderId: "YOUR_MESSAGINGSENDERID",
    appId: "YOUR_APPID"
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
