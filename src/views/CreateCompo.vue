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
                                <h1>Create a New Composition</h1>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Enter Composition's informations</small>
                            </div>
                            <div id="app">
                                <form role="form">
                                    <div class="form-group">
                                        <label>Compo's ID</label>
                                        <input v-model="id" type="text" class="form-control" placeholder="Enter the ID of the composition">
                                        <label>Compo's Name</label>
                                        <input v-model="name" type="text" class="form-control" placeholder="Enter the name of the composition">
                                        <label>Compo's Url</label>
                                        <input v-model="compositionUrl" type="text" class="form-control" placeholder="Enter the url of the composition">
                                    </div>
                                    <div class="text-center">
                                        <base-button @click="CreateCompo()" tag="a" type="primary" size="lg" href="#" class="active" role="button" aria-pressed="true">Create Composition</base-button>
                                    </div>

                                    <div class="text-center">
                                        <input type="file" @change="onFileSelected">
                                        <base-button @click="onUpload" tag="a" type="primary" size="lg" href="#" class="active" role="button" aria-pressed="true">Upload</base-button>
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
import axios from 'axios';
export default {
    data() {
        return{
            id:null,
            name:null,
            compositionUrl:null,
            selectedFile:null
        }
    },
    methods:{
        CreateCompo(){
            db.collection('Composition').add({
                id:this.id,
                name:this.name,
                compositionUrl:this.compositionUrl
            })
            .then(() => {
              this.$router.push('/ViewCompo');
            });
        },
        onFileSelected(event){
            this.selectedFile = event.target.files[0]
        },
        onUpload(){

        }
    }
}

</script>
<style>
</style>
