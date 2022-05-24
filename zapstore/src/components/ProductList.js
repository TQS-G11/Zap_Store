import React from "react"
import {Grid} from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = ({products, max=-1, gridSize=3}) => {
    return (
        <Grid container >
            {products.map((product, idx) => {
                if (max !== -1 && idx >= max) return
                return (
                    <Grid justifyContent={"center"} item xs={4}>
                        <ProductCard product={product}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ProductList