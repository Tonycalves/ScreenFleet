<template>
	<div>
		<div class="position-relative">
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="row text-center justify-content-center">
                        <div class="col-lg-10">
                            <h1 class="display-3 text-white">View all TV</h1>
                            <p class="lead text-white">Here, you can see all TV you created, and manage them. You can modify a TV, add a composition, delete a composition, clean ressources of the TV etc... Try it ! GL & HF</p>
                        </div>
                    </div>
                </div>


            </section>
        </div>

        <div class="container page-top">
            <div class="row">
                <div v-for="(TV,index) in Tvs" :key="index" class="col-lg-3 col-md-4 col-xs-6 thumb">
                    <a rel="ligthbox">
                        <p>{{ TV.name }}</p>
                        <img :src="TV.img" class="zoom img-fluid" alt="">
                        <p>{{ TV.ip }}</p>
                       <!-- <base-button @click="goTodetail(TV.ip)" type="primary" size="lg" class="active" role="button">Modify</base-button> -->
                       <div class="card-footer">
                            <div @click="goTodetailTv(TV.ip)" class="view_profile">Modify</div>
                        </div>
                    </a>
                </div>
           </div>
        </div>
	</div>
</template>


<script>
export default {
    data() {
        return{
            Tvs:[],
            loading: true
        }
    },
    methods:{
        fetchData(){
            db
          .collection('Tv')
          .get()
          .then(querySnapshot => {
            this.loading = false;
            querySnapshot.forEach(doc => {
              const data = {
                name: doc.data().name,
                ip: doc.data().ip,
                img: doc.data().img
              };
              this.Tvs.push(data);
            });
          });
        },
        goTodetailTv(Tvip) {
            this.$router.push({name:'EditTv',params:{ip:Tvip}})
        },
    },
    created(){
        this.fetchData();
    },
    
}

</script>


<style scoped="">

body {
  background-color:#1d1d1d !important;
  font-family: "Asap", sans-serif;
  color:#989898;
  margin:10px;
  font-size:16px;
}

#demo {
  height:100%;
  position:relative;
  overflow:hidden;
}


.green{
  background-color:#6fb936;
}
        .thumb{
            margin-bottom: 30px;
        }
        
        .page-top{
            margin-top:85px;
        }

   
img.zoom {
    width: 100%;
    height: 200px;
    border-radius:5px;
    object-fit:cover;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
}
        
 
.transition {
    -webkit-transform: scale(1.2); 
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}
    .modal-header {
   
     border-bottom: none;
}
    .modal-title {
        color:#000;
    }
    .modal-footer{
      display:none;  
    }
.card-footer{
                padding: 0 !important;
                background: #fff !important;
                display: flex;
                border-top: 0 !important;
            }
            .view_profile{
                display: flex;
                justify-content: center;
                padding: 10px;
                width: 100%;
                text-transform: uppercase;
                background: #e74c3c;
                color: #fff;
                cursor: pointer;
                border-bottom-left-radius: calc(0.25rem - 1px);
                
            }
            .view_profile::before{
                font-family: "Font Awesome 5 Free";
                content: "\f406";
                margin-right: 5px;
                font-weight: 600;
            }
</style>