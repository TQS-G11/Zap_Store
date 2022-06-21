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
import {getProductById} from "../api/PublicAPI";
import {addCartProduct} from "../api/PrivateAPI";

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

    const addToCart = () => {
        addCartProduct(id/1, quantity/1)
            .then(response => {
                console.log("product add response", response)
                navigate(ZAP_URI.CART)

            })
            .catch((error) => {
                console.log(error)
                let data = error.response["data"];
                let errorMessage = ""
                for (let err of data.errors) {
                    errorMessage += `${err}\n`
                }
                setModalTitle("Failed!")
                setModalText(errorMessage)
                setOpen(true)
            });

    }

    useEffect(() => {
        // setProduct(PRODUCT_LIST[id-1])
        getProductById(id)
            .then(response => {
                console.log("product page", response)
                setProduct(response.data)
            })
            .catch(err => {
                console.log(err)
            })
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
            />
        </Container>
    )
}

export default ProductPage