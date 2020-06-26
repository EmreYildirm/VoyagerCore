import * as types from "./actionTypes";
import api from "../api/busApi";
import axios from "axios";

export function fetchAllBus() {
    debugger;
    return function (dispatch) {
        return axios.get(api).
            then(response => {
                dispatch({ type: types.REQUEST_GET_ALL_BUS, payload: response.data })
            }).
            catch(error => {
                console.log("Not working fetch data" + error)
            })
    };
};


export function getBusById(busId) {
    return function (dispatch) {
        return axios.get(api + "/" + busId).
            then(response => {
                dispatch({ type: types.REQUEST_GET_BY_ID_BUS, payload: response.data })
            }).
            catch(error => {
                console.log("Not working getById" + error)
            });
    }
};

export function saveNewBus(bus) {
    debugger;
    return function (dispatch) {
        return axios.post(api, bus, {
            headers: {
                "Content-Type": "application/json"
            }
        }).
            then(response => {
                dispatch({ type: types.REQUEST_ADD_NEW_BUS, payload: response.data })
            }).
            catch(error => {
                console.log("Not working Add" + error)
            });
    }
};

export function updateBus(id, bus) {
    debugger;
    return function (dispatch) {
        return axios.put(api + "/" + id, bus).
            then(response => {
                dispatch({ type: types.REQUEST_UPDATE_BUS, payload: response.data })
            }).
            catch(error => {
                console.log("Not working Update" + error)
            });
    }
};

export function deleteBus(busId) {
    return function (dispatch) {
        return axios.delete(api + "/" + busId).
            then(response => {
                dispatch({ type: types.REQUEST_DELETE_BUS, payload: response.data })
            }).
            catch(error => {
                console.log("Not working Delete" + error)
            });
    }
};