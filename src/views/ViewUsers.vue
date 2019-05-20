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
                            <h1 class="display-3 text-white">View all Users</h1>
                            <p class="lead text-white">Here, you can see all Users you have in your companny, and manage them. You can modify a User, delete a User, Try it ! GL & HF</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        <div :key="componentKey">
            <div class="row">
                <div v-for="employee in employees" v-bind:key="employee.id" class="card">
                    <div class="card-header">
                        <div class="profile_pic">
                            <img src="https://bootsnipp.com/img/avatars/92ff0456eb6106d0c1ae8ab5f1fe0afe2d2d25f2.jpg">
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="d-lfex justify-content-center flex-column">
                            <div class="name_container">
                                <div class="name">{{employee.name}}</div>
                            </div>
                            <div class="address">{{employee.email}}</div>
                        </div>
                        <div class="info_container">
                            <div class="info">
                                <p>User Id</p>
                                <p>{{employee.employee_id}}</p>
                            </div>    
                        </div>
                    </div>
                    <div class="card-footer">
                        <div @click="goTodetail(employee.employee_id)" class="view_profile">Modify</div>
                    </div>
                </div>
            </div>
        </div>
</div>


</template>

<script>
export default {
  data() {
    return {
      employees: [],
      loading: true
    };
  },

  methods:{
    deleteEmployee(employee_id) {
      if (confirm('Are you sure?')) {
        db
          .collection('users')
          .where('employee_id', '==', employee_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push('/ViewUsers');
            });
          });
      }
    },
    goTodetail(Usersid) {
        this.$router.push({name:'EditUsers',params:{employee_id:Usersid}})
    },
    fetchData(){
        db
      .collection('users')
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            employee_id: doc.data().employee_id,
            email: doc.data().email,
            name: doc.data().name,
          };
          this.employees.push(data);
        });
      });
    }
  },
  created() {
      this.fetchData();
  }
};

</script>


<style scoped="">
            .card-header{
                background-image: url('http://www.latestseotutorial.com/wp-content/uploads/2016/12/love-dp-for-facebook.jpg') !important;
                padding: 0 !important;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                height: 150px;
                position: relative;
                display: flex;
                justify-content: center;
                text-align:center;
            }
            .card{
                overflow: hidden;
                border:0 !important;
                width: 300px;
                box-shadow: 0px 0px 15px 1px;
                -webkit-box-shadow:0px 0px 15px 1px;
            }
            .profile_pic{
                position: absolute;
                bottom: -50px;
                height: 112px;
                width: 112px;
                padding: 5px;
                border: 2px solid #f39c12;
                border-radius: 50%;
            }
            .card-body{
                padding-top: 55px !important;
            }
            .profile_pic img{
                height: 100px;
                width: 100px;
                border-radius: 50%;
            }
            .name_container{
                display: flex;
                justify-content: center;
            
            }
            .name{
                font-size: 20px;
                font-weight: 700;
                color: gray;
                position: relative;
            }

            .address{
                display: flex;
                justify-content: center;
                font-size: 12px;
                color: gray;
            }
            .follow{
                padding-top: 20px;
                display: flex;
                justify-content: center;
            }
            .follow_btn{
                background: #2196F3;
                padding: 7px;
                color: #fff;
                border-radius: 12px;
                cursor: pointer;
            }

            .follow_btn::before{
                font-family: "Font Awesome 5 Free";
                content: "\f234";
                font-weight: 600;
                margin-right: 5px;
            }
            .follow_btn:hover{
                background: #f39c12;
            }
            .info_container{
                padding-top: 20px;
                display: flex;
                justify-content: space-around;
                flex-direction: row;
            }
            .info{
                display: flex;
                flex-direction: column;
            }
            .info p:first-child{
                margin-bottom: 0;
                font-size: 12px;
                color: gray;
                text-transform: uppercase;
                text-align: center;
            }
            .info p:last-child{
                margin-bottom: 0;
                font-size: 20px;
                font-weight: 700;
                color: gray;
                text-transform: uppercase;
                text-align: center;
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