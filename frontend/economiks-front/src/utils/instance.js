import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://product-management-e3qf.onrender.com/'
})