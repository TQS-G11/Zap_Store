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
import {getCartProducts} from "../api/PrivateAPI";

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

    useEffect(() => {
        // let localProds = window.sessionStorage.getItem("products")
        // localProds = JSON.parse(localProds)
        // setProducts(localProds)
        getCartProducts()
            .then(response => {
                console.log(response)
                // TODO ainda n e feito nada com a response, mas seria so fazer um setProducts das cenas ig, no max dar
                // uns ajustes nas rows do datagrid
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const removeFromCard = (id) => {
        let localProds = window.sessionStorage.getItem("products")
        localProds = JSON.parse(localProds)
        localProds = localProds.filter((item) => {
            return item.id !== id
        })
        setProducts(localProds)
        window.sessionStorage.setItem("products", JSON.stringify(localProds))
    }

    const columns = [
        {
            field: "name",
            headerName: "Name",
            flex: 2
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
            valueGetter: ({value}) => `${Math.round(value * 100) / 100}`
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
        </Container>

        // </div>
    )
}

export default CartPage