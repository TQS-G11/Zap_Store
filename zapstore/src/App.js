import './App.css';
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import TopBar from "./components/TopBar";
import URI from "./constants/URI";
import HomePage from "./pages/HomePage";

function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(() => createTheme({
        palette: {
            mode: prefersDarkMode ? "dark" : "light",
        },
    }), [prefersDarkMode],);


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <TopBar/>
            {getRoutes()}
        </ThemeProvider>
    );
}

const getRoutes = () => {
    return getPublicRoutes();
}


const getPublicRoutes = () => {
    return (
        <Routes>
            <Route path={URI.HOME} element={<HomePage/>}/>
            {/*<Route path={URI.STORE} element={<CompaniesPage/>}/>*/}
            {/*<Route path={URI.RIDERS} element={<RidersManagementPage/>}/>*/}
        </Routes>
    );
};

(function () {
    let token = window.localStorage.getItem("token");
    if (token) axios.defaults.headers.common["Authorization"] = token; else axios.defaults.headers.common["Authorization"] = null;
})();

export default App;
