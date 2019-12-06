import Vue from "vue";
import VueRouter from "vue-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";

import Home from './components/Home';



Vue.config.productionTip = false;
Vue.use(VueRouter);


const routes = [
  { path: "/home", component: Home },
  
];

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
