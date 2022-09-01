import Swal from 'sweetalert2'

const alert = {
    toast: (message,toastClass="success",timer=3000,position="top-end") => {
        const Toast = Swal.mixin({
            toast: true,
            position: position,
            showConfirmButton: false,
            timer: timer,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        Toast.fire({
            icon:toastClass,
            message:message
        });
    },
    confirm: async (message) => {
        let response = await Swal.fire({
            title: message,
            text: '',
            icon: 'question',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            showCancelButton:true,
            reverseButtons:true,
        });

        return new Promise((resolve,reject)=>{
            if(response.isConfirmed)
                resolve(response)
        })
    }
}


export default alert;