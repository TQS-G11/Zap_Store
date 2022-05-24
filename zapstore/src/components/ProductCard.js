import React from "react"
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import URI from "../constants/URI";


const ProductCard = ({product}) => {

    const id = product["id"]
    const name = product["name"]
    const description = product["description"]
    const img = product["img"]

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Grid container justifyContent={"center"}>
                <Button variant={"contained"} color={"success"} href={`/${URI.STORE}/${id}`}>See More</Button>
            </Grid>
            <br/>
        </Card>
    )
}

export default ProductCard