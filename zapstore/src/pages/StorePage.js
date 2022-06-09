import React, {useEffect, useState} from "react";
import {Container, Grid, TextField, Typography} from "@mui/material";
import {PRODUCT_LIST} from "../constants/Products";
import ProductList from "../components/ProductList";

import "./StorePage.css"
import {getProducts} from "../api/PublicAPI";

const StorePage = () => {

    const [products, setProducts] = useState([])
    const token = window.sessionStorage.getItem("token")
    const isAdmin = window.sessionStorage.getItem("username") === "admin"

    useEffect(() => {
        getProducts()
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
                <h1>Store</h1>
                <p>Here you can check out the available items</p>
                <Grid container>
                    <Grid item xs={10}>
                        <TextField label={"Search"} margin={"normal"} className={"search-bar"} />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label={"Category"} margin={"normal"} className={"category-bar"} />
                    </Grid>
                </Grid>
                <br/>
                <br/>

                <ProductList
                    products={products}
                    elementsByRow={4}
                    canEdit={isAdmin}
                />

            </Container>
        </>
    )
}

export default StorePage