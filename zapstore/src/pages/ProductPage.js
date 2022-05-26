import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom";
import {PRODUCT_LIST} from "../constants/Products";
import {
    Button,
    Container,
    Grid,
    Paper, TextField,
    Typography
} from "@mui/material";
import "./ProductPage.css"
import ProductDescription from "../components/ProductDescription";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SaveIcon from '@mui/icons-material/Save';

import BasicModal from "../components/BasicModal";
import ZAP_URI from "../constants/ZAP_URI";

const ProductPage = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(0)
    const [open, setOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalText, setModalText] = useState("")

    const [updates, setUpdates] = useState(false)

    const navigate = useNavigate()
    const token = window.sessionStorage.getItem("token")
    const canEdit = window.sessionStorage.getItem("username") === "admin"
    console.log("token", token)
    console.log("Product id", id)

    const addToCart = () => {
        addProductToCart(product, quantity)
    }

    const addProductToCart = (product, quantity) => {
        // TODO use spring endpoint to add to cart

        if (product.quantity < quantity) {
            setModalTitle("Failed!")
            setModalText("Item out of Stock!")
        }
        else {
            setModalTitle("Success!")
            setModalText("Chosen item added!")
        }
        setOpen(true)

    }

    const onClose = () => {
        if (modalTitle.toLowerCase().includes("success")) {
            let products = window.sessionStorage.getItem("products")
            if (products == null) {
                products = "[]"
            }
            let newProd = {...product}
            newProd.quantity = quantity
            newProd.price = product.price * quantity

            products = JSON.parse(products)
            products.push(newProd)
            window.sessionStorage.setItem("products", JSON.stringify(products))
            navigate(ZAP_URI.CART)
        }
    }

    useEffect(() => {
        setProduct(PRODUCT_LIST[id-1])
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
                            <ProductDescription
                                product={product}
                                canEdit={canEdit}
                                setUpdates={setUpdates}
                            />
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
                            <Typography>Price: €{Math.round(quantity*product.price * 100) / 100}</Typography>
                            <br/>
                            <br/>
                            {token == null ?
                                <Button
                                    variant={"contained"}
                                    color={"success"}
                                    size={"large"}
                                    endIcon={<ShoppingCartIcon/>}
                                    onClick={() => navigate(ZAP_URI.LOGIN)}
                                >Login to add to cart!</Button>
                            :
                                <>
                                    <Button
                                        variant={"contained"}
                                        color={"success"}
                                        size={"large"}
                                        endIcon={<ShoppingCartIcon/>}
                                        onClick={addToCart}
                                    >Add to Cart</Button>
                                    {updates &&
                                        <Button
                                            variant={"contained"}
                                            size={"large"}
                                            endIcon={<SaveIcon/>}
                                            sx={{ml:4}}
                                        >Save Changes</Button>
                                    }
                                </>

                            }

                        </Grid>
                    </Grid>
                    <br/>
                </Paper>

            }
            <BasicModal
                open={open}
                setOpen={setOpen}
                title={modalTitle}
                text={modalText}
                onClose={onClose}
            />
        </Container>
    )
}

export default ProductPage