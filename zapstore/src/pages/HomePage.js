import React, {useEffect, useState} from "react";
import {Button, Container, Grid, Paper, Typography} from "@mui/material";
import ProductCard from "../components/ProductCard";
import {PRODUCT_LIST} from "../constants/Products";
import ProductList from "../components/ProductList";
import {useNavigate} from "react-router-dom";
import ZAP_URI from "../constants/ZAP_URI"
import {getProducts} from "../api/PublicAPI";

const HomePage = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getProducts("", "")
            .then(response => {
                console.log("product response", response)
                setProducts(response.data)
            })
            .catch(err => {
                console.log("sussy error", err)
            })
    }, [])


    return (
        <>
            <Container>
                <h1>Zap</h1>
                <p>Zap is a tools/electronics store. It uses a rider service to delivery directly at your home :)</p>

                <h3>In our store you could find...</h3>
                <ProductList products={products} elementsByRow={3} max={3} />
                <br/>
                <Button
                    variant={"contained"}
                    color={"success"}
                    onClick={() => navigate(ZAP_URI.STORE)}
                >See other products</Button>
            </Container>
        </>
    )
}

export default HomePage