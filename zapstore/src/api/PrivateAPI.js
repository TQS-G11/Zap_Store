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

