import './App.css';
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import TopBar from "./components/TopBar";
import ZAP_URI from "./constants/ZAP_URI";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import ProductPage from "./pages/ProductPage";
import LoginForm from "./components/LoginForm";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";

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
            <Route path={ZAP_URI.HOME} element={<HomePage/>}/>
            <Route path={ZAP_URI.STORE} element={<StorePage/>}/>
            <Route path={`${ZAP_URI.STORE}/:id`} element={<ProductPage/>} />
            <Route path={ZAP_URI.LOGIN} element={<LoginForm/>} />
            <Route path={ZAP_URI.CART} element={<CartPage/>} />
            <Route path={ZAP_URI.CHECKOUT} element={<CheckoutPage/>} />
            <Route path={ZAP_URI.ORDERS} element={<OrdersPage/>} />
            {/*<Route path={ZAP_URI.RIDERS} element={<RidersManagementPage/>}/>*/}
        </Routes>
    );
};

(function () {
    let token = window.localStorage.getItem("token");
    if (token) axios.defaults.headers.common["Authorization"] = token; else axios.defaults.headers.common["Authorization"] = null;
})();

export default App;
