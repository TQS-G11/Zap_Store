import React from "react"
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import URI from "../constants/URI";
import {useNavigate} from "react-router-dom";
import "./ProductCard.css"


const ProductCard = ({product}) => {

    const navigate = useNavigate()
    const id = product["id"]
    const name = product["name"]
    const description = product["description"]
    const img = product["img"]
    const qtd = product["quantity"]

    return (
        <Card className={"product-card"} sx={{ maxWidth: "90%", marginBottom: "2em" }}
              onClick={() => navigate(`${URI.STORE}/${id}`)}
        >
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name} - ({qtd} in stock)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <br/>
        </Card>
    )
}

export default ProductCard