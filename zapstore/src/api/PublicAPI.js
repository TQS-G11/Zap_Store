import axios from "axios"

const api = axios.create({
    baseURL: `${process.env.REACT_APP_DELIVERIZE_API_URL}/zap`,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
})

export const getProducts = () => api.get("/products")

export const getProductById = (id) => api.get(`/products/${id}`)