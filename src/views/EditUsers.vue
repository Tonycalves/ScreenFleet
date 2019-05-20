<template>
  <div>
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
                                <h1>Update User</h1>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>You can update informations about the user</small>
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
                                        <input v-model="password" type="text" class="form-control" placeholder="Enter password" required>
                                    </div>
                                    
                                    <div class="text-center">
                                        <base-button v-on:click="updateEmployee" tag="a" type="primary" size="lg" href="#" class="active" role="button" aria-pressed="true">Update</base-button>
                                        <base-button v-on:click="deleteEmployee" tag="a" type="danger" size="lg" href="#" class="active" role="button" aria-pressed="true">Delete</base-button>
                                    </div>
                                </form>
                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee_id: null,
      email: null,
      name:null,
      password:null
    };
  },
  beforeRouteEnter (to, from, next) {
      db.collection('users').where('employee_id', '==', to.params.employee_id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.employee_id = doc.data().employee_id
            vm.name = doc.data().name
            vm.email = doc.data().email
            vm.password = doc.data().password
          })
        })
      })
    },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData () {
        db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.employee_id = doc.data().employee_id
            this.name = doc.data().name
            this.email = doc.data().email
            this.password = doc.data().password
          })
        })
      },
      updateEmployee () {
        db.collection('users').where('employee_id', '==', this.$route.params.employee_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
              employee_id: this.employee_id,
              name: this.name,
              email: this.email,
              password: this.password
            })
            .then(() => {
              this.$router.push('/ViewUsers');
            });
          })
        })
      },
    deleteEmployee() {
      if (confirm('Are you sure?')) {
        db
          .collection('users')
          .where('employee_id', '==', this.$route.params.employee_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push('/ViewUsers');
            });
          });
      }
    }
  }
};
</script>