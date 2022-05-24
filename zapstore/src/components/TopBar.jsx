import {AppBar, Box, Button, Chip, Container, Grid, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip}
    from "@mui/material";
import URI from "../constants/URI";
import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';


const pages = {
    "Home": URI.HOME,
    "Store": URI.STORE,
    // "Rider Management": URI.RIDERS
}


const TopBar = () => {
    const onLogout = () => {
        window.localStorage.clear();
        window.location.reload();
    };

    // Responsive App Bar
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

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
                                <MenuItem key={k} onClick={handleCloseNavMenu}>
                                    <Link href={pages[k]} textAlign="center" underline="none">{k}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {Object.keys(pages).map((k) => (
                            <Button
                                key={k}
                                onClick={handleCloseNavMenu}
                                href={pages[k]}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {k}
                            </Button>
                        ))}
                    </Box>

                    {window.localStorage.getItem("token") === null ?
                        (
                            <Box sx={{flexGrow: 0}}>
                                <Grid container spacing={1} justifyContent="flex-end">
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            href="/login"
                                        >
                                            Log in
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            href="/signup"
                                            disabled={true}
                                        >
                                            Sign up
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        ) : (
                            <Box sx={{flexGrow: 0}}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <Chip label={window.localStorage.getItem("username")} variant="outlined"/>
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
                            </Box>
                        )
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TopBar;