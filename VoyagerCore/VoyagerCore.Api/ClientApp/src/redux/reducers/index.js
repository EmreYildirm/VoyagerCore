import { combineReducers } from "redux";
import routeReducer from "./reducer_route";
import hostReducer from "./reducer_host";
import driverReducer from "./reducer_driver";
import busReducer from './reducer_bus';
import expeditionReducer from './reducer_expedition';
import ticketReducer from './reducer_ticket';
import passengerReducer from './reducer_passenger';

const rootReducer = combineReducers({
    routes: routeReducer,
    hosts: hostReducer,
    drivers: driverReducer,
    buses: busReducer,
    expeditions: expeditionReducer,
    tickets: ticketReducer,
    passengers: passengerReducer
});

export default rootReducer;