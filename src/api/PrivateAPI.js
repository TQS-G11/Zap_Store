import axios from "axios"

const token = window.sessionStorage.getItem("token")

const api = axios.create({
    baseURL: `${process.env.REACT_APP_DELIVERIZE_API_URL}/zap`,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
})

export const addCartProduct = (productId, quantity) => api.post("/cart/add", {"productId": productId, "quantity": quantity})

export const getCartProducts = () => api.get("/cart")

export const deleteCartProductById = (cartId) => api.delete(`/cart/${cartId}`)

export const makeCheckout = (notes, destination) => api.post("/cart/checkout", {"notes": notes, "destination": destination})

export const getOrders = () => api.get("/orders")