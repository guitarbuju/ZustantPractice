import axios from 'axios'

import { useCreateAuthStore } from '../store/auth'


const authApi = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})


authApi.interceptors.request.use(config => {
   const token = useCreateAuthStore.getState().token

    config.headers = {
        Authorization:`Bearer ${token}`
    }
    return config
})


export default authApi