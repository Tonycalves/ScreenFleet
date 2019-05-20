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
                            <h1 class="display-3 text-white">View all Compositions</h1>
                            <p class="lead text-white">Here, you can see all Compositions you created, and manage them. Delete a composition, Try it ! GL & HF</p>
                        </div>
                    </div>
                </div>


            </section>
        </div>

        <div class="container page-top">
            <div class="row">
                <div v-for="(Compo,index) in Compos" :key="index" class="col-lg-3 col-md-4 col-xs-6 thumb">
                    <a rel="ligthbox">
                        <p>{{ Compo.name }}</p>
                        <img :src="Compo.compositionUrl" class="zoom img-fluid" alt="">
                        <p>{{Compo.id}}</p>
                       <div class="card-footer">
                            <div @click="goTodetailCompo(Compo.id)" class="view_profile">Edit</div>
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
            Compos:[],
            loading: true
        }
    },
    methods:{
        fetchData(){
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
        goTodetailCompo(Id) {
            this.$router.push({name:'EditCompo',params:{id:Id}})
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