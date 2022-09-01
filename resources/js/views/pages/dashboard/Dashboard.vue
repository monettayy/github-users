<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
const app = getCurrentInstance()
const alert = app.appContext.config.globalProperties.$alert;

// let user_infos = ref([]);
let usernames = ref(null);
const page = reactive({
    user_infos: [],
});

const getUserInfo = () => {
    axios.get('/github-users', { params:{ usernames:usernames.value } }).then((response)=>{
        console.log(response);
        if(response.data.success){
            page.user_infos = response.data.data;
            console.log('user_infos', page.user_infos);
        }else{
            if(response.data.message)
                alert.toast(response.data.message, 'error');
        }
    }).catch((error)=>{
        if(error.response.data.message){
            alert.toast(error.response.data.message, 'error');
        }else{
            alert.toast('Something went wrong', 'error');
        }
    })
}

onMounted(() => {

})
</script>

<template>
<div class="container-fluid">
    <h3 class="mb-5 text-gray-800">Find User from Github</h3>
    <div class="row justify-content-center">
        <div class="col-lg-10 col-12">
            <h5 class="mb-2 text-gray-800">Input List of Username separated by comma</h5>
            <div class="form-group">
                <input type="text" class="form-control"
                    placeholder="juan, pedro, anne"
                    v-model="usernames"
                />
            </div>
            <button class="btn btn-primary" @click="getUserInfo">
                Get Users Information
            </button>
            <div class="row justify-content-center mt-4">
                <div class="col-lg-4 col-md-6"  v-for="(d, i) in page.user_infos">
                    <div class="landing-card">
                        <div class="card-label row" v-if="d.status">
                            <div class="col-6 mb-0">Name {{ d.status }}</div>
                            <div class="col-6 mb-1" v-if="d.name">{{ d.name }}</div>
                            <div class="col-6 mb-1" v-else>(No Name)</div>
                            <div class="col-6 mb-0">Login</div>
                            <div class="col-6 mb-1" v-if="d.login">{{ d.login }}</div>
                            <div class="col-6 mb-1" v-else>(No Login)</div>
                            <div class="col-6 mb-0">Company</div>
                            <div class="col-6 mb-1" v-if="d.company">{{ d.company }}</div>
                            <div class="col-6 mb-1" v-else>(No Company)</div>
                            <div class="col-6 mb-0">Followers</div>
                            <div class="col-6 mb-1 text-right">{{ d.followers }}</div>
                            <div class="col-6 mb-0">Public Repositories</div>
                            <div class="col-6 mb-1 text-right">{{ d.public_repos }}</div>
                            <div class="col-6 mb-0">Average Followers/Repo</div>
                            <div class="col-6 mb-1 text-right">{{ d.ave_followers }}</div>
                        </div>  
                        <div class="card-label row" v-else>
                            <div class="col-6 mb-0">Username</div>
                            <div class="col-6 mb-1">{{ d.username }}</div>
                            <div class="col-12 mb-0 text-center">(No Data Found for this Username)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.landing-card
{
    position: relative;
    overflow: visible;
    width:100%;
    /* height: 50vh; */
    padding: 30px 20px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 12px;
    overflow: auto;
}
</style>