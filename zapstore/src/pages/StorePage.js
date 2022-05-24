import React, {useEffect, useState} from "react";
import {Container, Typography} from "@mui/material";
import {PRODUCT_LIST} from "../constants/ProductsList";

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

            </Container>
        </>
    )
}

export default StorePage