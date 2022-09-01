<script setup>

const logout = () => {
    axios.post('/logout').then((response)=>{
        if(response.data.success)
        {
            window.location.href = response.data.redirect;
        }
    })
}
</script>

<template>
  <div
    class="modal fade"
    id="logoutModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Logout</h5>
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body text-center">
          <h2>Oh No! You're leaving . . .</h2>
          <h2>Are you sure?</h2>
        </div>
        <div class="modal-footer">
          <button class="btn btn-light" type="button" data-dismiss="modal">
            Naah, Just Kidding
          </button>
          <button class="btn btn-primary" @click="logout">Yes, Log Me Out</button>
        </div>
      </div>
    </div>
  </div>
</template>
