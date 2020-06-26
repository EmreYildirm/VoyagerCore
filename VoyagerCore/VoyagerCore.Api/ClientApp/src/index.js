import React from "react";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import configureStore from "./redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();
render (
    <ReduxProvider store={store}>
        <Router>
            <App />     
        </Router>
    </ReduxProvider>,
    document.getElementById("root")
);
