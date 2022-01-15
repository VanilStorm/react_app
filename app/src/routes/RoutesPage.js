import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";

import HEADER_ROUTES from "./RouteNames";
import WomenPageContainer from "../pages/WomenPage/container/WomenPageContainer";
import PageNotFound from "../commonComponents/PageNotFound/PageNotFound";
import CartContainer from "../pages/CartPage/container/CartContainer";

class RoutesPage extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="*" element={<PageNotFound/>}/>
                    <Route path={HEADER_ROUTES.WOMEN} element={<WomenPageContainer/>}/>
                    <Route path={'/cart'} element={<CartContainer/>}/>
                </Routes>
            </div>
        );
    }
}

export default RoutesPage;