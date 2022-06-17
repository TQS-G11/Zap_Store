import React, {useEffect, useState} from "react"

// Components
import {PRODUCT_LIST} from "../constants/Products";

// MUI
import {Button, Container, Typography} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

// Icons
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {useNavigate} from "react-router-dom";
import ZAP_URI from "../constants/ZAP_URI";
import {deleteCartProductById, getCartProducts} from "../api/PrivateAPI";

const CartPage = () => {

    const [pageSize, setPageSize] = useState(5)
    const navigate = useNavigate()
    const token = window.sessionStorage.getItem("token")

    useEffect(() => {
        // console.log(token)
        if (token == null) {
            navigate(ZAP_URI.HOME)
        }
    }, [])

    const [products, setProducts] = useState([])

    const getCarts = () => {
        getCartProducts()
            .then(response => {
                console.log(response)
                setProducts(response.data)
                // TODO ainda n e feito nada com a response, mas seria so fazer um setProducts das cenas ig, no max dar
                // uns ajustes nas rows do datagrid
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        // let localProds = window.sessionStorage.getItem("products")
        // localProds = JSON.parse(localProds)
        // setProducts(localProds)
        getCarts()
    }, [])

    const removeFromCard = (id) => {
        deleteCartProductById(id)
            .then(response => {
                console.log("delete response", response)
                getCarts()
            })
            .catch(err => {
                console.log("error delete response", err)
            })
    }

    const columns = [
        {
            field: "name",
            headerName: "Name",
            flex: 2,
            valueGetter: ({row}) => row.product.name
        },
        {
            field: "quantity",
            headerName: "Quantity",
            flex: 1
        },
        {
            field: "price",
            headerName: "Price (€)",
            flex: 1,
            valueGetter: ({row}) => `${Math.round(row.product.price * 100 * row.quantity) / 100 }`
        },
        {
            field: "market",
            headerName: "",
            flex: 1,
            renderCell: (params) => <Button onClick={() => removeFromCard(params.row.id)} endIcon={<RemoveShoppingCartIcon/>} fullWidth variant={"contained"} color={"error"}>Remove</Button>
        }
    ]

    return (
        // <div style={{ height: "50vh", width: '100%' }}>

        <Container>
            <br/>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10]}
                checkboxSelection
                disableSelectionOnClick
                autoHeight
            />
            <br/>
            {products.length !== 0 &&
                <Button
                    variant={"contained"}
                    color={"success"}
                    // onClick={() => {nagivate(ZAP_URI)}}
                >Go to Checkout</Button>
            }
        </Container>

        // </div>
    )
}

export default CartPage