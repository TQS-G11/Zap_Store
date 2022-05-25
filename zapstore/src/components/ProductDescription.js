import React from "react"
import {Typography} from "@mui/material";

const ProductDescription = ({product}) => {
    return (
        <>
            <Typography variant={"h4"}>{product.name}</Typography>
            <Typography variant={"h5"}>€{product.price}</Typography>
            <Typography variant={"h5"}>{product.quantity} in stock.</Typography>
            <Typography color={"text.secondary"}>{product.description}</Typography>

        </>
    )


}

export default ProductDescription