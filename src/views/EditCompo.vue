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
       
    </section>
      <div class="">
          <div class="col-lg-6">
              <card>
                  <template>
                      <div class="text-muted text-center mb-3">
                          <h1>Edit Composition</h1>
                      </div>
                  </template>
                  <template>
                      <div id="app">
                          <form role="form">
                              <div class="form-group">
                                  <h2>{{name}}</h2>
                                  <img :src="compositionUrl" class="zoom img-fluid" alt="">
                                  <label>{{id}}</label>
                              </div>
                              <div class="text-center">
                                  <base-button v-on:click="deleteCompo" tag="a" type="danger" size="lg" href="#" class="active" role="button" aria-pressed="true">Delete</base-button>
                              </div> 
                          </form>
                      </div>
                  </template>
              </card>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: null,
      compositionUrl:null
    };
  },
  beforeRouteEnter (to, from, next) {
      db.collection('Composition').where('id', '==', to.params.id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.id = doc.data().id
            vm.name = doc.data().name
            vm.compositionUrl = doc.data().compositionUrl
          })
        })
      })
    },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData () {
        db.collection('Composition').where('id', '==', this.$route.params.id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.id = doc.data().id
            this.name = doc.data().name
            this.compositionUrl = doc.data().compositionUrl
          })
        })
      },
    deleteCompo() {
      if (confirm('Are you sure?')) {
        db
          .collection('Composition')
          .where('id', '==', this.$route.params.id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push('/ViewCompo');
            });
          });
      }
    }
  },
};
</script>