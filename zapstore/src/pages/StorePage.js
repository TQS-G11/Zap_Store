import React, {useEffect, useState} from "react";
import {Container, Typography} from "@mui/material";
import {PRODUCT_LIST} from "../constants/Products";
import ProductList from "../components/ProductList";

const StorePage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(PRODUCT_LIST)
    }, [])


    return (
        <>
            <Container>
                <h1>Store</h1>
                <p>Here you can check out the available items</p>
                <ProductList products={products} elementsByRow={5} />

            </Container>
        </>
    )
}

export default StorePage