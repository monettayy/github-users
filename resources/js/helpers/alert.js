import Swal from 'sweetalert2'

const alert = {
    toast: (message, toastClass='success', timer=3000, position='top-end') => {
        const Toast = Swal.mixin({
            toast: true,
            timer: timer,
            position: position,
            timerProgressBar: true,
            showConfirmButton: false,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        Toast.fire({
            icon: toastClass,
            title: message,
        });
    },
    confirm: async (message, description='') => {
        let response = await Swal.fire({
            title: message,
            text: description,
            icon: 'question',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            reverseButtons: true,
        });

        return new Promise((resolve,reject)=>{
            if(response.isConfirmed)
                resolve(response)
        })
    },
    success: async (message, description='') => {
        let response = await Swal.fire({
            title: message,
            text: description,
            icon: 'success',
        });

        return new Promise((resolve,reject)=>{
            if(response.isConfirmed)
                resolve(response)
        })
    },
    error: async (message, description='') => {
        let response = await Swal.fire({
            title: message,
            text: description,
            icon: 'error',
        });

        return new Promise((resolve,reject)=>{
            if(response.isConfirmed)
                resolve(response)
        })
    },
    warning: async (message, description='') => {
        let response = await Swal.fire({
            title: message,
            text: description,
            icon: 'warning',
        });

        return new Promise((resolve,reject)=>{
            if(response.isConfirmed)
                resolve(response)
        })
    },
    info: async (message, description='') => {
        let response = await Swal.fire({
            title: message,
            text: description,
            icon: 'info',
        });

        return new Promise((resolve,reject)=>{
            if(response.isConfirmed)
                resolve(response)
        })
    },
}


export default alert;