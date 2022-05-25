import React from "react"
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import ZAP_URI from "../constants/ZAP_URI";
import {useNavigate} from "react-router-dom";
import "./ProductCard.css"


const ProductCard = ({product}) => {

    const navigate = useNavigate()
    const id = product["id"]
    const name = product["name"]
    const description = product["description"]
    const img = product["img"]
    const quantity = product["quantity"]
    const price = product["price"]

    return (
        <Card className={"product-card"} sx={{ maxWidth: "90%", marginBottom: "2em" }}
              onClick={() => navigate(`${ZAP_URI.STORE}/${id}`)}
        >
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name} - €{price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ({quantity} in stock)
                </Typography>
            </CardContent>
            <br/>
        </Card>
    )
}

export default ProductCard