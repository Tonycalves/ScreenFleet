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
                                <h1>Create a New TV</h1>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Enter Tv's informations</small>
                            </div>
                            <div id="app">
                                <form role="form">
                                    <div class="form-group">
                                        <label>TV's Name</label>
                                        <input v-model="name" type="text" class="form-control" placeholder="Enter the name of the TV">
                                        <label>TV's IP</label>
                                        <input v-model="ip" type="text" class="form-control" placeholder="Enter the IP of the TV">
                                    </div>
                                    <div class="text-center">
                                        <base-button @click="CreateTv()" tag="a" type="primary" size="lg" href="#" class="active" role="button" aria-pressed="true">Create TV</base-button>
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
            name:null,
            ip:null,
            composition:null
        }
    },
    methods:{
        CreateTv(){
            db.collection('Tv').add({
                name:this.name,
                ip:this.ip,
                img:"https://zupimages.net/up/19/20/sdb7.png",
                composition:""
            })
            .then(() => {
              this.$router.push('/ViewTV');
            });
        },
    }
}

</script>
<style>
</style>
