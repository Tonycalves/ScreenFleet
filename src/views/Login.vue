<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <h1>Login</h1>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>You need to Login to manage your TV</small>
                            </div>
                            <div id="app">
                                <form role="form">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input v-model="email" type="text" class="form-control" placeholder="Enter your email">
                                        <label>Password</label>
                                        <input v-model="password" type="password" class="form-control" placeholder="Enter your password">
                                    </div>
                                    <div class="text-center">
                                        <base-button v-on:click="Login" tag="a" type="primary" size="lg" href="#" class="active" role="button" aria-pressed="true">Login</base-button>
                                    </div>
                                </form>
                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        Login: function(e) {
            firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(user=> {
                this.$router.push('/Admin');
            },
            err=>{
                alert(err.message);
            });
            e.preventDefault();
        }
    }
}

</script>
<style>
</style>
