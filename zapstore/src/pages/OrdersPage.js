import React, {useEffect, useState} from "react"
import {getOrders} from "../api/PrivateAPI";
import {Container, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import Formats from "../constants/Formats";
import moment from "moment";
import {useNavigate} from "react-router-dom";
import ZAP_URI from "../constants/ZAP_URI";

const OrdersPage = () => {

    const status = [
        "REQUESTED",
        "FETCHING",
        "DELIVERING",
        "DELIVERED"
    ]

    const [selStatus, setSelStatus] = useState(status[0])
    const [orders, setOrders] = useState([])
    const token = window.sessionStorage.getItem("token")
    const navigate = useNavigate()


    useEffect(() => {

        if (token == null) {
            navigate(ZAP_URI.HOME)
        }

        getOrders()
            .then(response => {
                console.log("sussy response", response)
                setOrders(response.data.orders)
            })
            .catch(err => {
                console.log("sussy error", err)
            })
    }, [])





    return (
        <Container>
            <br/>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Delivery Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={selStatus}
                    onChange={(e) => setSelStatus(e.target.value)}
                >
                    {status.map(s =>
                        <MenuItem key={s} value={s}>{s}</MenuItem>
                    )}

                </Select>
            </FormControl>
            <br/>
            <br/>
            {orders.map(order => {
                if (order.deliveryStatus !== selStatus) {
                    return <div key={order.id}></div>
                }
                return (
                    <div key={order.id}>
                        <Typography variant={"h4"}>{moment(order.requestedAt).format(Formats.DATE_TIME)}</Typography>
                        <Typography variant={"h5"}>Origin: {order.origin}</Typography>
                        <Typography variant={"h5"}>Destination: {order.destination}</Typography>
                        <Typography variant={"h5"}>Delivery Price: {order.price}€</Typography>
                        <Typography variant={"h5"}>Notes: {order.notes}</Typography>
                        {order.acceptedAt !== null &&
                            <Typography variant={"h5"}>Accepted: {moment(order.acceptedAt).format(Formats.DATE_TIME)}</Typography>
                        }
                        <br/>
                    </div>
                )
            })}
        </Container>
    )
}

export default OrdersPage