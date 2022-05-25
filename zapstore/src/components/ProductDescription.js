import React from "react"
import {Typography} from "@mui/material";

const ProductDescription = ({product}) => {
    return (
        <>
            <Typography variant={"h3"}>{product.name}</Typography>
            <Typography variant={"h4"}>€{product.price}</Typography>
            <Typography color={"text.secondary"}>{product.description}</Typography>
        </>
    )


}

export default ProductDescription