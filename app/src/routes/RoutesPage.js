import React from 'react';
import {Route, Routes} from "react-router-dom";

import WomenPageContainer from "../pages/MainPage/container/MainPageContainer";
import CartContainer from "../pages/CartPage/container/CartContainer";
import HEADER_ROUTES from "./RouteNames";

class RoutesPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="*" element={<WomenPageContainer/>}/>
                    <Route path={HEADER_ROUTES.CART} element={<CartContainer/>}/>
                </Routes>
            </div>
        );
    }
}

export default RoutesPage;