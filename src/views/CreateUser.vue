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
                                <h1>Create user</h1>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>You can create an user here</small>
                            </div>
                            <div id="app">
                                <form role="form">
                                    <div class="form-group">
                                        <label>User ID#</label>
                                        <input v-model="employee_id" type="text" class="form-control" placeholder="Enter User ID" required>

                                        <label>Name</label>
                                        <input v-model="name" type="text" class="form-control" placeholder="Enter name" required>

                                        <label>Email</label>
                                        <input v-model="email" type="email" class="form-control" placeholder="Enter email" required>

                                        <label>Password</label>
                                        <input v-model="password" type="password" class="form-control" placeholder="Enter password" required>
                                    </div>
                                    
                                    <div class="text-center">
                                        <base-button v-on:click="AddUser" tag="a" type="primary" size="lg" href="#" class="active" role="button" aria-pressed="true">Create User</base-button>
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
      data () {
        return {
          employee_id: null,
          email: null,
          password:null,
          name:null
        }
      },
      methods: {
        AddUser () {
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user=> {
            },
            err=>{
                alert(err.message);
            });

          db.collection('users').add({
            employee_id: this.employee_id,
            email: this.email,
            password: this.password,
            name: this.name
          })
          .then(docRef => {
            console.log('Client added: ', docRef.id)
            this.$router.push('/ViewUsers')
          })
          .catch(error => {
            console.error('Error adding employee: ', error)
          })
        }
      }
    }
</script>
<style>
</style>
