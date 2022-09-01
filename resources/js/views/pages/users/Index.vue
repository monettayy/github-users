<script setup>
import { reactive, onMounted, getCurrentInstance } from 'vue';
import moment from "moment";

const app = getCurrentInstance()
const alert = app.appContext.config.globalProperties.$alert;

const page = reactive({
    title: 'User',
    list_title: 'Users',
    create_url:'/users/create',
    data_list: [],
});

const getUsers = () => {
    axios.get('/users-list').then((response)=>{
        if(response.data.success){
            page.data_list = response.data.data;
        }
    }).catch((error)=>{
        alert.error(error.response.data.message);
    })
}

const deleteItem = (item) => {
    alert.confirm("Are you sure you want to delete user " + item.name).then(()=>{
        axios.delete('/users/'+item.id).then((response)=>{
            if(response.data.success){
                alert.toast("Successfully deleted user");
                page.data_list = response.data.data;
            }
        }).catch((error)=>{
            alert.error(error.response.data.message);
        })
    })
}

onMounted(() => {
    getUsers();
})
</script>

<template>
  <div class="container-fluid">
    <h1 class="h3 mb-2 text-gray-800">List</h1>
    <p class="mb-4">
      This page includes list of all {{ page.list_title }}. 
      To create a new one go to
      <a target="_blank" :href="page.create_url">{{ page.title }} Create Page
      </a>.
    </p>

    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          {{ page.list_title }} Table
        </h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Created Date</th>
                <th>Last Update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot v-if="page.data_list && page.data_list.length > 10">
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Created Date</th>
                <th>Last Update</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody v-if="page.data_list && page.data_list.length > 0">
              <tr v-for="(data, i) in page.data_list">
                <td>{{ data.name }}</td>
                <td>{{ data.username }}</td>
                <td>{{ moment(data.created_at).format("MMM DD, YYYY hh:mm a") }}</td>
                <td>{{ moment(data.updated_at).format("MMM DD, YYYY hh:mm a") }}</td>
                <td>
                  <a
                    class="btn btn-primary btn-icon-split btn-sm ma-1"
                    :href="'/users/'+data.code"
                  >
                    <span class="icon text-white-50">
                      <i class="fas fa-pen"></i>
                    </span>
                    <span class="text">Edit</span>
                  </a>
                  <button
                    class="btn btn-danger btn-icon-split btn-sm ma-1"
                    @click="deleteItem(data)"
                  >
                    <span class="icon text-white-50">
                      <i class="fas fa-trash"></i>
                    </span>
                    <span class="text">Delete</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
