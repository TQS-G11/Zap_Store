import React, {useEffect, useState} from "react";
import {Button, Container, Grid, Paper, Typography} from "@mui/material";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts([
            {
                "id":1,
                "name": "Amogus toy",
                "img": "https://i1.sndcdn.com/artworks-TOJJyHynzM0iRSuW-9URBDA-t500x500.jpg",
                "description": "A very sussy toy."
            },
            {
                "id":2,
                "name": "Amogus toy",
                "img": "https://i1.sndcdn.com/artworks-TOJJyHynzM0iRSuW-9URBDA-t500x500.jpg",
                "description": "A very sussy toy."
            },
            {
                "id":3,
                "name": "Amogus toy",
                "img": "https://i1.sndcdn.com/artworks-TOJJyHynzM0iRSuW-9URBDA-t500x500.jpg",
                "description": "A very sussy toy."

            },
        ])
    })


    return (
        <>
            <Container>
                <h1>Zap</h1>
                <p>Zap is a tools/electronics store. It uses a rider service to delivery directly at your home :)</p>

                <h3>In our store you could find...</h3>
                <Grid container >
                {products.map(product => {
                    return (
                        <Grid justifyContent={"center"} item xs={4}>
                            <ProductCard product={product}/>
                        </Grid>
                    )
                })}
                </Grid>
                <br/>
                <Button variant={"contained"} color={"success"}>See other products</Button>
            </Container>
        </>
    )
}

export default HomePage