import Vue from "vue";
import Router from "vue-router";
import AppFooter from "./layout/AppFooter";
import NavBar from "./layout/Navigation";
import NavBarAdmin from "./layout/NavigationAdmin";
import CreateTV from "./views/CreateTV.vue";
import Home from "./views/Home.vue";
import ViewTV from "./views/ViewTV.vue";
import ViewRessources from "./views/ViewRessource.vue";
import Signin from "./views/Signin.vue";
import Admin from "./views/Admin.vue";
import Login from "./views/Login.vue";
import CreateUser from "./views/CreateUser.vue";
import ViewUsers from "./views/ViewUsers.vue";
import EditUsers from "./views/EditUsers.vue";

import EditTv from "./views/EditTV.vue";
import OpenTv from "./views/OpenTv.vue";

import CreateCompo from "./views/CreateCompo.vue";
import ViewCompo from "./views/ViewCompo.vue";
import EditCompo from "./views/EditCompo.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: NavBar,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/CreateTV",
      name: "CreateTV",
      components: {
        header: NavBarAdmin,
        default: CreateTV,
        footer: AppFooter
      }
    },
    {
      path: "/Admin",
      name: "Admin",
      components: {
        header: NavBarAdmin,
        default: Admin,
        footer: AppFooter
      }
    },
    {
      path: "/Signin",
      name: "Signin",
      components: {
        header: NavBar,
        default: Signin,
        footer: AppFooter
      }
    },
    {
      path: "/Login",
      name: "Login",
      components: {
        header: NavBar,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/CreateUser",
      name: "CreateUser",
      components: {
        header: NavBarAdmin,
        default: CreateUser,
        footer: AppFooter
      }
    },
    {
      path: "/ViewUsers",
      name: "ViewUsers",
      components: {
        header: NavBarAdmin,
        default: ViewUsers,
        footer: AppFooter
      }
    },
    {
      path: "/EditUsers/:employee_id",
      name: "EditUsers",
      components: {
        header: NavBarAdmin,
        default: EditUsers,
        footer: AppFooter
      }
    },
    {
      path: "/ViewTV",
      name: "ViewTV",
      components: {
        header: NavBarAdmin,
        default: ViewTV,
        footer: AppFooter
      }
    },
    {
      path: "/OpenTv/:ip",
      name: "OpenTv",
      components: {
        header: NavBarAdmin,
        default: OpenTv,
        footer: AppFooter
      }
    },
    {
      path: "/EditTv/:ip",
      name: "EditTv",
      components: {
        header: NavBarAdmin,
        default: EditTv,
        footer: AppFooter
      }
    },
    {
      path: "/CreateCompo",
      name: "CreateCompo",
      components: {
        header: NavBarAdmin,
        default: CreateCompo,
        footer: AppFooter
      }
    },
    {
      path: "/ViewCompo",
      name: "ViewCompo",
      components: {
        header: NavBarAdmin,
        default: ViewCompo,
        footer: AppFooter
      }
    },
    {
      path: "/EditCompo/:id",
      name: "EditCompo",
      components: {
        header: NavBarAdmin,
        default: EditCompo,
        footer: AppFooter
      }
    },
    {
      path: "/ViewRessources",
      name: "ViewRessources",
      components: {
        header: NavBarAdmin,
        default: ViewRessources,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
