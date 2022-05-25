import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import {PRODUCT_LIST} from "../constants/Products";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Paper, TextField,
    Typography
} from "@mui/material";
import "./ProductPage.css"
import ProductDescription from "../components/ProductDescription";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductPage = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(0)
    let token = window.sessionStorage.getItem("token")
    console.log("token", token)
    console.log("Product id", id)

    useEffect(() => {
        setProduct(PRODUCT_LIST[1])
    }, [])

    return (
        <Container>
            <br/>
            {
                Object.keys(product).length !== 0 &&

                <Paper
                    elevation={3}
                    sx={{
                        width: "100%"
                    }}
                >
                    <br/>
                    <Grid container justifyContent={"center"} >

                        <Grid container item justifyContent={"center"} xs={6}>
                            <img
                                className={"product-img"}
                                src={product.img}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <ProductDescription product={product} />
                            <br/>
                            <TextField
                                type={"number"}
                                label={"Quantity"}
                                value={quantity}
                                onChange={(e) => {
                                    const val = e.target.value
                                    if (isNaN(val) || val == "") return
                                    setQuantity(val)
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <br/>
                            <br/>
                            {token == null ?
                                <Button
                                    variant={"contained"}
                                    color={"success"}
                                    size={"large"}
                                    endIcon={<ShoppingCartIcon/>}
                                >Login to add to cart!</Button>
                            :
                                <Button
                                    variant={"contained"}
                                    color={"success"}
                                    size={"large"}
                                    endIcon={<ShoppingCartIcon/>}
                                >Add to Cart</Button>
                            }

                        </Grid>
                    </Grid>
                    <br/>
                </Paper>

            }
        </Container>
    )
}

export default ProductPage