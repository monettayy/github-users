<script setup>
import { reactive, onMounted, defineProps, getCurrentInstance  } from 'vue';
import moment from "moment";

const app = getCurrentInstance()
const alert = app.appContext.config.globalProperties.$alert;

const props = defineProps({
    _auth: {
        type: Object,
        default: null
    },
    _user: {
        type: Object,
        default: null
    }
});

const form = reactive({
    name: '',
    username:'',
    password:'',
    repeat_password: '',
});

const page = reactive({
    for_edit: false,
});

const saveUser = () => {
    if(form.password != form.repeat_password){
        alert.toast("Password and Repeat Password does not match!", 'error');
        return;
    }

    if (page.for_edit){
        axios.put('/users/'+form.id,form).then((response)=>{
            console.log(response.data)
            if(response.data.success){
                alert.toast("Successfully updated account");
                Object.assign(form, response.data.data);
            }
        }).catch((error)=>{
            alert.error(error.response.data.message)
        })
    }else{
        axios.post('/users',form).then((response)=>{
          console.log(response.data)
            if(response.data.success){
                window.location.href = response.data.redirect;
            }
        }).catch((error)=>{
            alert.error(error.response.data.message)
        })
    }
}

const registerUser = () => {
    if(form.password != form.repeat_password){
        alert.toast("Password and Repeat Password does not match!", 'error');
        return;
    }

    axios.post('/register',form).then((response)=>{
        console.log(response.data)
        if(response.data.success){
            alert.success(response.data.message).then((r) => {
                window.location.href = response.data.redirect;
            })
        }
    }).catch((error)=>{
        alert.error(error.response.data.message)
    })
}

onMounted(() => {
    if(props._user){
        Object.assign(form, props._user);
        page.for_edit = true;
    }
})
</script>

<template>
<div>
  <div class="row justify-content-center">
    <div class="col-xl-10 col-lg-12 col-md-9">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Outer Row -->
          <div class="row">
            <div class="col-lg-6 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-6" style="min-height: 500px;">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 m-5" v-if="page.for_edit">Update an Account</h1>
                  <h1 class="h4 text-gray-900 m-5" v-else>Create an Account!</h1>
                </div>
                <div class="container">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleName"
                      placeholder="Name"
                      v-model="form.name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Username"
                      v-model="form.username"
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="form.password"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        v-model="form.repeat_password"
                      />
                    </div>
                  </div>
                  <div class="mt-3 text-right">
                    <template v-if="page.for_edit">
                      <div>
                        <p class="mb-0">Created Date: {{ moment(form.created_at).format("MMM DD, YYYY hh:mm a") }}</p>
                        <p class="mb-1">Last Update: {{ moment(form.updated_at).format("MMM DD, YYYY hh:mm a") }}</p>
                      </div>
                      <a class="btn btn-light btn-user mr-2" href="/users">
                        Cancel
                      </a>
                      <button class="btn btn-primary btn-user" @click="saveUser">
                        Update Account
                      </button>
                    </template>
                    <template v-else>
                      <button class="btn btn-primary btn-user"  @click="saveUser" v-if="_auth">
                        Register Account
                      </button>
                      <button class="btn btn-primary btn-user"  @click="registerUser" v-else>
                        Register User Account
                      </button>
                    </template>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
