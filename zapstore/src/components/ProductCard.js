import React from "react"
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import ZAP_URI from "../constants/ZAP_URI";
import {useNavigate} from "react-router-dom";
import "./ProductCard.css"

// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const ProductCard = ({product, canEdit=false}) => {

    const navigate = useNavigate()
    const id = product["id"]
    const name = product["name"]
    const description = product["description"]
    const img = product["img"]
    const quantity = product["quantity"]
    const price = product["price"]

    return (
        <Card className={"product-card"} sx={{ maxWidth: "90%", marginBottom: "2em" }}

        >
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt={name}
            />
            <CardContent onClick={() => navigate(`${ZAP_URI.STORE}/${id}`)}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className={"product-card-limit"}
                    sx={{height: "2.8em"}}
                >
                    {name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    className={"product-card-limit"}
                    sx={{height: "3em"}}
                >
                    {description}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    ({quantity} in stock)
                </Typography>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className={"product-card-limit"}
                >
                    €{price}
                </Typography>

            </CardContent>
            <br/>
            {
                canEdit &&
                <CardActions className={"product-card-actions"}>
                    <IconButton
                        aria-label={"Delete"}
                        onClick={() => navigate(`${ZAP_URI.STORE}/${id}`)}
                    >
                        <EditIcon/>
                    </IconButton>
                    <IconButton
                        color={"error"}
                        aria-label={"Delete"}
                        onClick={() => {
                            console.log("Item Deleted")
                            alert("Item Deleted!")
                        }}
                    >
                        <DeleteIcon/>
                    </IconButton>

                </CardActions>
            }
        </Card>
    )
}

export default ProductCard