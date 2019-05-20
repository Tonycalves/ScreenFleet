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
                          <h1>Modify TV</h1>
                      </div>
                  </template>
                  <template>
                      <div class="text-center text-muted mb-4">
                          <small>You can modify the TV here</small>
                      </div>
                      <div id="app">
                          <form role="form">
                              <div class="form-group">
                                  <h2>{{name}}</h2>
                                  <img :src="img" class="zoom img-fluid" alt="">
                                  <label>{{ip}}</label>
                              </div>
                              <div class="text-center">
                                  <base-button @click="Purge()" type="primary" size="lg" class="active" role="button" aria-pressed="true">Purge resources</base-button>
                                  <base-button v-on:click="deleteTV" tag="a" type="danger" size="lg" href="#" class="active" role="button" aria-pressed="true">Delete</base-button>
                                  <base-button @click="OpenTv(ip)" type="primary" size="lg" class="active" role="button" aria-pressed="true">Open TV</base-button>
                              </div> 
                          </form>


                          <div class="container page-top">
                            <div class="row">
                                <div v-for="(Compo,index) in Compos" :key="index" class="col-lg-3 col-md-4 col-xs-6 thumb">
                                    <a rel="ligthbox">
                                      <div class="radio radio-primary">
                                        <input type="radio" name="radio1" id="radio2" v-model="choix" :value="Compo.compositionUrl">
                                      </div>
                                        <p>{{ Compo.name }}</p>
                                          <img :src="Compo.compositionUrl" class="zoom img-fluid" alt="">
                                        <p>{{Compo.id}}</p>
                                    </a>
                                </div>
                           </div>
                        </div>
                      </div>
                  </template>
                  <base-button @click="updateTVComposition()" type="primary" size="lg" class="active" role="button" aria-pressed="true">Add Composition</base-button>
              </card>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tv_id: null,
      name: null,
      ip:null,
      img:null,
      loading:true,
      Compos:[],
      choix:null
    };
  },
  beforeRouteEnter (to, from, next) {
      db.collection('Tv').where('ip', '==', to.params.ip).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.name = doc.data().name
            vm.ip = doc.data().ip
            vm.img = doc.data().img
          })
        })
      });
    },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData () {
        db.collection('Tv').where('ip', '==', this.$route.params.ip).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.name = doc.data().name
            this.ip = doc.data().ip
            this.img = doc.data().img
          })
        })
      },
      updateTVComposition() {
        db.collection('Tv').where('ip', '==', this.$route.params.ip).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
              compositionUrl:this.choix
            })
            .then(() => {
              this.$router.push('/ViewTV');
            });
          })
        })
      },
      fetchDataCompo(){
            db
          .collection('Composition')
          .get()
          .then(querySnapshot => {
            this.loading = false;
            querySnapshot.forEach(doc => {
              const data = {
                id: doc.data().id,
                name: doc.data().name,
                compositionUrl: doc.data().compositionUrl
              };
              this.Compos.push(data);
            });
          });
        },
      updateTV() {
        db.collection('Tv').where('ip', '==', this.$route.params.ip).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
              ip: this.ip,
              name: this.name,
              img: this.img
            })
            .then(() => {
              this.$router.push('/ViewTV');
            });
          })
        })
      },
      Purge() {
          this.$router.push({name:'ViewTV'})
        },
      OpenTv(TvIp){
          this.$router.push({name:'OpenTv',params:{ip:TvIp}})
        },
    deleteTV() {
      if (confirm('Are you sure?')) {
        db
          .collection('Tv')
          .where('ip', '==', this.$route.params.ip)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push('/ViewTV');
            });
          });
      }
    }
  },

  created(){
        this.fetchDataCompo();
    },
};
</script>



<style scoped="">
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}


.custom-radios div {
  display: inline-block;
}
.custom-radios input[type="checkbox"] {
  display: none;
}
.custom-radios input[type="checkbox"] + label {
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 14px;
}
.custom-radios input[type="checkbox"] + label span {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  border: 2px solid #FFFFFF;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.33);
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  line-height: 44px;
  margin-top:10px;
}
.custom-radios input[type="checkbox"] + label span img {
  opacity: 0;
  transition: all .3s ease;
}
.custom-radios input[type="checkbox"]#color-1 + label span {
  background-color: #3498db;
}
.custom-radios input[type="checkbox"]#color-2 + label span {
  background-color: #3498db;
}
.custom-radios input[type="checkbox"]#color-3 + label span {
  background-color: #3498db;
}
.custom-radios input[type="checkbox"]#color-4 + label span {
  background-color: #3498db;
}
.custom-radios input[type="checkbox"]:checked + label span {
  opacity: 1;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg) center center no-repeat;
  width: 40px;
  height: 40px;
  display: inline-block;

}
</style>