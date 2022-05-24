import React from "react"
import {useParams} from "react-router-dom";

const ProductPage = () => {

    const {id} = useParams()

    return (
        <>
            Product Page for id {id}
        </>
    )
}

export default ProductPage