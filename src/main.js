import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HelloRoute from "./components/HelloRoute";
import HelloWorld from "./components/HelloWorld";
import UsersView from "./components/UsersView";
import UsersDetail from "./components/UsersDetail";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HelloWorld
    },
    {
      path: "/my-route",
      component: HelloRoute
    },
    {
      path: "/users",
      component: UsersView
    },
    {
      path: "/users:id",
      component: UsersDetail
    }
  ]
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
