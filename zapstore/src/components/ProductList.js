import React from "react"
import {Grid} from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = ({products, max=-1, elementsByRow=3}) => {
    return (
        <Grid container >
            {products.map((product, idx) => {
                if (max !== -1 && idx >= max) return
                return (
                    <Grid container justifyContent={"center"} item xs={12/elementsByRow}>
                        <ProductCard product={product}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ProductList