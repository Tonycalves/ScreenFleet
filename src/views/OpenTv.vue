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
      <div>
          <div>
              <card>
                  <template>
                              <div id="parent">
                                  <img :src="img" id="parent">
                                  <img :src="compositionUrl" class="superpose" id="img_1">
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
      tv_id: null,
      name: null,
      ip:null,
      img:null,
      compositionUrl:null
    };
  },
  beforeRouteEnter (to, from, next) {
      db.collection('Tv').where('ip', '==', to.params.ip).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.name = doc.data().name
            vm.ip = doc.data().ip
            vm.img = doc.data().img
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
        db.collection('Tv').where('ip', '==', this.$route.params.ip).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.name = doc.data().name
            this.ip = doc.data().ip
            this.img = doc.data().img
            this.compositionUrl = doc.data().compositionUrl
          })
        })
      },
  },
};
</script>

<style scoped="">
  img.superpose {
   position: absolute;
   top: 10%;
   left: 18%;
}
#img_1 {
   z-index: 10;
}
  #parent {
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto
  }
</style>