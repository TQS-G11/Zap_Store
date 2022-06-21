import axios from "axios"

const api = axios.create({
    baseURL: `${process.env.REACT_APP_DELIVERIZE_API_URL}`,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
})

export const getProducts = (name, category) => api.get(`/zap/products?name=${name}&category=${category}`)

export const getProductById = (id) => api.get(`/zap/products/${id}`)

export const login = (username, password) => api.post(`/api/users/login`, {"username": username, "password": password})