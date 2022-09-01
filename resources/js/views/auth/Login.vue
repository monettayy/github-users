<script setup>
import { reactive, getCurrentInstance, defineProps } from 'vue';
const app = getCurrentInstance()
const alert = app.appContext.config.globalProperties.$alert;

const props = defineProps({
    _auth: {
        type: Object,
        default: null
    },
});

const form = reactive({
    username:'',
    password:''
});

const login = () => {
    if(!form.username || !form.password){
        alert.error("Invalid Input!")
        return;
    }

    axios.post('/login', form).then((response)=>{
        console.log(response);
        setTimeout(()=>{
          if(response.data.success){
              window.location.href = '/home';
          }else{
              alert.error("Invalid Account!")
          }
        }, 2000);
    }).catch((error)=>{
      alert.error("Invalid Account!")
    })
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-xl-10 col-lg-12 col-md-9">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">

          <div class="row">
            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
            <div class="col-lg-6" style="min-height: 500px;">
              <div class="p-5" v-if="!_auth">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 m-5">Welcome Back!</h1>
                </div>
                <form @submit.prevent="login" class="user">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      v-model="form.username"
                      placeholder="Username"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      v-model="form.password"
                      id="exampleInputPassword"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-user btn-block"
                  >
                    Login
                  </button>
                </form>
                <hr>
                <div class="text-center">
                    <a class="small" href="/register">Create an Account!</a>
                </div>
              </div>
              <div class="p-5" v-else>
                <div class="text-center">
                  <h1 class="h4 text-gray-900 m-5">Lost?</h1>
                </div>
                <form action="" class="user mt-5 pt-5">
                  <a
                    class="button btn btn-primary btn-user btn-block"
                    href="/home"
                  >
                    Back to Home
                </a>
                </form>
              </div>  
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
