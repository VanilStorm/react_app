import React from 'react';
import ReactDOM from 'react-dom';

import "./fonts/fonts.css"
import {BrowserRouter} from "react-router-dom";
import MainLayout from "./commonComponents/MainLayout/MainLayout";

import {ApolloProvider} from "@apollo/client"
import client from "./server";
import RoutesPage from "./routes/RoutesPage";
import {Provider} from "react-redux";
import store from "./redux/redux-store/redux-store";


ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Provider store={store}>
                <MainLayout>
                    <RoutesPage/>
                </MainLayout>
            </Provider>
        </BrowserRouter>
    </ApolloProvider>,
  document.getElementById('root')
);

