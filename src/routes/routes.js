import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import CartPage from "../components/CartPage";
import PaymentPage from "../components/PaymentPage";
import SuccessPage from "../components/SuccessPage";

const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/cart">
                    <CartPage />
                </Route>
                <Route exact path="/payment">
                    <PaymentPage handleContextForm={props.handleContextForm}/>
                </Route>
                <Route exact path="/success">
                    <SuccessPage />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Router;