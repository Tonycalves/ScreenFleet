<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">

            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                    <router-link to="/Admin" class="nav-link">Home</router-link>

                 
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Tv management</span>
                    </a>
                    <router-link to="/CreateTV" class="dropdown-item">Create TV</router-link>
                    <router-link to="/ViewTV" class="dropdown-item">View all TV</router-link>
                    <router-link to="/ViewRessources" class="dropdown-item">View TV's ressources</router-link>
                </base-dropdown>

                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Composition</span>
                    </a>
                    <router-link to="/CreateCompo" class="dropdown-item">Create Composition</router-link>
                    <router-link to="/ViewCompo" class="dropdown-item">View all Compositions</router-link>
                </base-dropdown>


                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Manage Users</span>
                    </a>
                    <router-link to="/CreateUser" class="dropdown-item">Create user</router-link>
                    <router-link to="/ViewUsers" class="dropdown-item">View all users</router-link>
                </base-dropdown>
                    <button v-on:click="Logout" class="btn black">Logout</button>
            </ul>
            <span class="email black-text">{{currentUser}}</span>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
    data(){
        return {
            isLoggedIn: false,
            currentUser: false
        };
    },
    created() {
        if (firebase.auth().currentUser){
            this.currentUser = firebase.auth().currentUser.email;
        }
    },
    methods: {
        Logout: function(){
            firebase
            .auth()
            .signOut()
            .then(() => {
                this.$router.push('/');
            });
        }
    },
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>