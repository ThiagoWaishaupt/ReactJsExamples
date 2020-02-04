import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout2 from "./pages/Layout2";
import Layout3 from "./pages/Layout3";
import Layout4 from "./pages/Layout4";
import Layout5 from "./pages/Layout5";

export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/layout_2" component={Layout2} />
                <Route path="/layout_3" component={Layout3} />
                <Route path="/layout_4" component={Layout4} />
                <Route path="/layout_5" component={Layout5} />
            </Switch>
        </BrowserRouter>
    );
}
