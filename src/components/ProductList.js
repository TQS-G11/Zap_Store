import React from "react"
import {Grid} from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = ({products, max=-1, elementsByRow=3, canEdit=false}) => {
    return (
        <Grid container >
            {products.map((product, idx) => {
                if (max !== -1 && idx >= max) return
                return (
                    <Grid key={idx} container justifyContent={"center"} item xs={12/elementsByRow}>
                        <ProductCard
                            key={idx}
                            product={product}
                            canEdit={canEdit}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ProductList