import {Alert, Box, Fade, Grid} from "@mui/material"
import {Paper, Typography, TextField, Button} from "@mui/material";
import {useEffect, useState} from "react";
import LoginForm from "../components/LoginForm";
import CardContent from '@mui/material/CardContent';


const ReviewPage = () => {
    const [destination, setDestination] = useState("");
    const [notes, setNotes] = useState("")

    const [alertMsg, setAlertMsg] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("info");

    const onSubmit = (e) => {
        e.preventDefault();
        onCheckout();
    };

    useEffect(() => {
    }, []);

    const onCheckout = () => {
        let checkoutInfo = {"notes": notes, "destination": destination};
        // TODO: POST request
    }

    return (
        <Box>
            {window.localStorage.getItem("token") === null ?
                (
                    <Grid container justifyContent="center">
                        <Alert severity="warning" variant="filled" sx={{mt: 2, maxWidth: 1000}}>
                            Log in to access your cart and check out.
                        </Alert>
                        <LoginForm/>
                    </Grid>
                ) : (
                    <Grid container justifyContent="center">
                        <Paper elevation={10} sx={{m: 2, maxWidth: 500}}>
                            <CardContent>
                                <form onSubmit={onSubmit}>
                                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography align="left" variant="h8">
                                                Address
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField id="textfield-destination"
                                                       fullWidth
                                                       label="Enter the address to be delivered to"
                                                       variant="outlined"
                                                       multiline
                                                       maxRows={Infinity}
                                                       onChange={(e) => setDestination(e.target.value)}/>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography align="left" variant="h8">
                                                Notes (optional)
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField id="textfield-notes"
                                                       fullWidth
                                                       label="Enter notes / special delivery instructions"
                                                       variant="outlined"
                                                       multiline
                                                       maxRows={Infinity}
                                                       onChange={(e) => setNotes(e.target.value)}/>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography align="left" variant="h8">
                                                Credit card number
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid item xs={12}>
                                                <TextField id="textfield-cc"
                                                           fullWidth
                                                           label="Enter credit card number (dummy payment field)"
                                                           variant="outlined"
                                                           multiline
                                                           maxRows={Infinity}
                                                           type="number"
                                                           onChange={(e) => setNotes(e.target.value)}/>
                                            </Grid>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                color="secondary"
                                                type="submit"
                                            >
                                                Check Out
                                            </Button>
                                        </Grid>
                                        {alertMsg ?
                                            (
                                                <Fade in={true}>
                                                    <Grid item xs={12}>
                                                        <Alert severity={alertSeverity}>{alertMsg}</Alert>
                                                    </Grid>
                                                </Fade>
                                            ) : (
                                                <></>
                                            )
                                        }
                                    </Grid>
                                </form>
                            </CardContent>
                        </Paper>
                    </Grid>
                )
            }
        </Box>
    );
};

export default ReviewPage;