import axios from 'axios'
import { CONFIG } from '../model/config'
import { toast } from 'sonner';


const api = axios.create({
    baseURL: CONFIG.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,

})

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {

            // toast.error('Ошибка авторизации')
            sessionStorage.removeItem('token')

            return Promise.reject('Ошибка авторизации');
        }

        return Promise.reject(error);
    }
);

export default api