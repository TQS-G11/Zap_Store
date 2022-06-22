import {AppBar, Box, Button, Chip, Container, Grid, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip}
    from "@mui/material";
import ZAP_URI from "../constants/ZAP_URI";
import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {useNavigate} from "react-router-dom";



const pages = {
    "Home": {
        "link": ZAP_URI.HOME,
        "private": false
    },
    "Store": {
        "link": ZAP_URI.STORE,
        "private": false
    },
    "Orders": {
        "link": ZAP_URI.ORDERS,
        "private": true
    }

    // "Rider Management": ZAP_URI.RIDERS
}


const TopBar = () => {
    const onLogout = () => {
        window.sessionStorage.clear();
        navigate(ZAP_URI.HOME)
    };

    const navigate = useNavigate()

    // Responsive App Bar
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    let token = window.sessionStorage.getItem("token")
    let username = window.sessionStorage.getItem("username")

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth={"xl"}>
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {Object.keys(pages).map((k) => (
                                (!pages[k].private || token != null) &&
                                <MenuItem key={k} onClick={handleCloseNavMenu}>
                                    <Link onClick={() => navigate(pages[k].link)} textAlign="center" underline="none">{k}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {Object.keys(pages).map((k) => (
                            (!pages[k].private || token != null) &&
                            <Button
                                key={k}
                                onClick={() => navigate(pages[k].link)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {k}
                            </Button>
                        ))}
                    </Box>

                    {token == null ?
                        (
                            <Box sx={{flexGrow: 0}}>
                                <Grid container spacing={1} justifyContent="flex-end">
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            onClick={() => navigate("login")}
                                        >
                                            Log in
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => navigate("signup")}
                                            disabled={true}
                                        >
                                            Sign up
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        ) : (
                            <Box sx={{flexGrow: 0}}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <Button
                                            variant={"contained"}
                                            color={"success"}
                                            endIcon={<ShoppingCartIcon/>}
                                            onClick={() => navigate(ZAP_URI.CART)}
                                        >Cart</Button>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="Open settings">
                                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                                <Chip id={"username-chip"} label={username} variant="outlined"/>
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            sx={{mt: '45px'}}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            <MenuItem onClick={handleCloseUserMenu}>
                                                <Link textAlign="center" onClick={onLogout}>Sign out</Link>
                                            </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>

                            </Box>
                        )
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TopBar;