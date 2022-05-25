import {
    Alert,
    Avatar, Box,
    Button,
    CardContent, Fade,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {useState} from "react";
// import {login} from "../api/PublicApi";
import {useNavigate} from "react-router-dom";
import ZAP_URI from "../constants/ZAP_URI";

const LoginForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    const resetErrors = (resetUsernameError, resetPasswordError) => {
        setErrorMsg("");
        if (resetUsernameError)
            setUsernameErrorMsg("");
        if (resetPasswordError)
            setPasswordErrorMsg("");
    };

    const onLogin = (username, password) => {
        console.log(`username: ${username}, password: ${password}`);
        window.sessionStorage.setItem("token", "amogus")
        window.sessionStorage.setItem("username", username)
        navigate(ZAP_URI.HOME)
        // login(username, password)
        //     .then((response) => {
        //         const {token} = response.data;
        //         window.localStorage.setItem("token", token);
        //         console.log(`stored token ${token}`);
        //         window.localStorage.setItem("username", username);
        //         if (["/login", "/signup"].includes(window.location.pathname))
        //             navigate(ZAP_URI.HOME);
        //         window.location.reload();
        //     })
        //     .catch((error) => {
        //         let data = error.response["data"];
        //         if ("non_field_errors" in data)
        //             setErrorMsg(data["non_field_errors"]);
        //         setUsernameErrorMsg(data["username"] ?? "");
        //         setPasswordErrorMsg(data["password"] ?? "");
        //     });
    };


    return (
        <Grid container justifyContent="center">
            <Paper elevation={10} sx={{m: 2, maxWidth: 500}}>
                <CardContent>
                    <form onSubmit={onSubmit}>
                        <Grid container justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item container xs={12} justifyContent="center">
                                <Avatar sx={{width: 50, height: 50}}>
                                    <LockOutlinedIcon/>
                                </Avatar>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center" variant="h5">
                                    Log in
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    placeholder="Enter Username"
                                    value={username}
                                    error={Boolean(usernameErrorMsg)}
                                    helperText={usernameErrorMsg}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                        resetErrors(true, false)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    placeholder="Enter Password"
                                    error={Boolean(passwordErrorMsg)}
                                    helperText={passwordErrorMsg}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        resetErrors(false, true)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="success"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </Grid>
                            {errorMsg === "" ?
                                (
                                    <></>
                                ) : (
                                    <Fade in={true}>
                                        <Grid item xs={12}>
                                            <Alert severity="error">{errorMsg}</Alert>
                                        </Grid>
                                    </Fade>
                                )
                            }
                            <Grid item xs={12}>
                                <Typography align="center">
                                    <p>Don't have an account yet?</p>
                                    <Link
                                        style={{cursor: "pointer"}}
                                        color="primary"
                                        href={ZAP_URI.SIGNUP}
                                    >
                                        <strong>Sign up!</strong>
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Paper>
        </Grid>
    );
};

export default LoginForm;