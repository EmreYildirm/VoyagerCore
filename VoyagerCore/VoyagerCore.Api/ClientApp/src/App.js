import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
//HOME
import UserLoginPage from "./components/user/UserLoginPage";
import SignUpPage from "../src/components/user/SignUp";
import HomePage from "../src/components/home/HomePage";
//ROUTE
import AddRoute from "./components/route/AddRoute";
import RoutePage from "../src/components/route/RoutePage";
import UpdateRoute from "./components/route/UpdateRoute";
//ERROR
import PageNotFound from "../src/components/errors/PageNotFound";
//Hosts
import HostPage from "./components/worker/Host/HostPage";
import AddHost from "./components/worker/Host/AddHost";
import UpdateHost from "./components/worker/Host/UpdateHost";
//Drivers
import CreateDriver from "./components/worker/Driver/AddDriver";
import DriverPage from "./components/worker/Driver/DriverPage";
import UpdateDriver from './components/worker/Driver/UpdateDriver';
//BUSS
import BusPage from "../src/components/bus/BusPage";
import UpdateBus from '../src/components/bus/UpdateBusPage';
import AddBusPage from "../src/components/bus/AddBusPage";
//EXPEDÝTÝON
import ExpeditionsPage from "../src/components/expeditions/ExpeditionsPage";
import ManageExpeditionPage from "../src/components/expeditions/ManageExpeditionPage";
//TÝCKET
import SellTicket from '../src/components/ticket/SellTicket';
import Bus from '../src/components/bus/Bus';


function App() {
    return (
        <div className="App">
            < Switch >
                <Route exact path="/" component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/login" component={UserLoginPage} />
                <Route path="/signup" component={SignUpPage} />

                <Route path="/createRoute" component={AddRoute} />
                <Route path="/routes" component={RoutePage} />
                <Route path="/updateRoute/:id" component={UpdateRoute} />

                <Route path="/createdriver" component={CreateDriver} />
                <Route path="/drivers" component={DriverPage} />
                <Route path="/updateDriver/:id" component={UpdateDriver} />


                <Route path="/bus" component={BusPage} />
                <Route path="/createbus" component={AddBusPage} />
                <Route path="/updatebus/:id" component={UpdateBus} />


                <Route path="/hosts" component={HostPage} />
                <Route path="/createhost" component={AddHost} />
                <Route path="/updateHost/:id" component={UpdateHost} />

                <Route path="/expeditions" component={ExpeditionsPage} />
                <Route path="/createExpedition" component={ManageExpeditionPage} />

                <Route path="/sellticket/:id" component={SellTicket} />
                <Route path="/tickets" component={Bus} />

                <Route component={PageNotFound}></Route>
            </Switch >
        </div>
    );
}
export default App
    /*
    < Switch >
    <Route exact path="/" component={HomePage} />
    <Route path="/home" component={HomePage} />
    <Route path="/login" component={UserLoginPage} />
    <Route path="/signup" component={SignUpPage} />

    <Route path="/createRoute" component={AddRoute} />
    <Route path="/routes" component={RoutePage} />
    <Route path="/updateRoute/:id" component={UpdateRoute} />

    <Route path="/createdriver" component={CreateDriver} />
    <Route path="/drivers" component={DriverPage} />
    <Route path="/updateDriver/:id" component={UpdateDriver} />


    <Route path="/bus" component={BusPage} />
    <Route path="/createbus" component={AddBusPage} />
    <Route path="/updatebus/:id" component={UpdateBus} />


    <Route path="/hosts" component={HostPage} />
    <Route path="/createhost" component={AddHost} />
    <Route path="/updateHost/:id" component={UpdateHost} />

    <Route path="/expeditions" component={ExpeditionsPage} />
    <Route path="/createExpedition" component={ManageExpeditionPage} />

    <Route path="/sellticket/:id" component={SellTicket} />
    <Route path="/tickets" component={Bus} />

    <Route component={PageNotFound}></Route>
            </Switch >
                */