import React, {useState} from "react"
import {Button, Container, TextField} from "@mui/material";
import isEmail from 'validator/lib/isEmail';
import {isNumber} from "@mui/x-data-grid/utils/utils";

const CheckoutPage = () => {

    // Inputs
    const [email, setEmail] = useState("")
    const [creditNumber, setCreditNumber] = useState("")

    // Validation
    const [errorMessage, setErrorMessage] = useState("")

    const validateForm = () => {
        let isValid = true
        let err = ""

        if (!isEmail(email)) {
            isValid = false
            err += `Email "${email}" not valid!\n`
        }

        if (isNaN(creditNumber) || creditNumber.length < 2) {
            isValid = false
            err += `Credit Card "${creditNumber}" not valid!\n`
        }

        if (!isValid) {
            alert(err)
        }

    }


    return (
        <Container>
            <br/>
            <TextField
                label={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
            />
            <br/>
            <br/>
            <TextField
                label={"Credit Number"}
                value={creditNumber}
                onChange={(e) => setCreditNumber(e.target.value)}
                fullWidth
            />
            <br/>
            <br/>
            <Button
                variant={"contained"}
                color={"success"}
                onClick={() => validateForm()}
            >Make a deliver</Button>
        </Container>
    )
}

export default CheckoutPage