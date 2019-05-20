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
                    <router-link to="/" class="nav-link">Home</router-link> 

                <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                    <router-link to="/Signin" class="nav-link">Signin</router-link>
                </ul>
                <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                    <router-link to="/Login" class="nav-link">Login</router-link> 
                </ul>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>