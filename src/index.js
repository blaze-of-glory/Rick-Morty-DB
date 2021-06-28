import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";
import AppService from "./components/app-service-context/app-service";
import {AppServiceProvider} from "./components/app-service-context";

const appService = new AppService();

ReactDOM.render(
    <Provider store={store}>
        <AppServiceProvider value={appService}>
            <Router>
                <App/>
            </Router>
        </AppServiceProvider>
    </Provider>,
    document.getElementById('root')
);
