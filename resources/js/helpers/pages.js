import { defineAsyncComponent } from 'vue'

const pages = {
    'login-card': defineAsyncComponent(() => import('../views/auth/Login.vue')),
    'logout-modal': defineAsyncComponent(() => import('../views/auth/LogoutModal.vue')),
    
    'users-index': defineAsyncComponent(() => import('../views/pages/users/Index.vue')),
    'users-form': defineAsyncComponent(() => import('../views/pages/users/Form.vue')),

    'dashboard': defineAsyncComponent(() => import('../views/pages/dashboard/Dashboard.vue')),
}

export default pages;

