import * as types from "./actionTypes";
import api from "../api/driverApi";
import axios from "axios";

export function fetchAllDrivers() {
    return function (dispatch) {
        return axios.get(api).
            then(response => {
                dispatch({ type: types.REQUEST_GET_ALL_DRIVER, payload: response.data })
            }).
            catch(error => {
                console.log("Not working fetch data" + error)
            });
    }
};

export function getDriverById(driverId) {
    return function (dispatch) {
        return axios.get(api + "/" + driverId).
            then(response => {
                dispatch({ type: types.REQUEST_GET_BY_ID_DRIVER, payload: response.data })
            }).
            catch(error => {
                console.log("Not working getById" + error)
            });
    }
};

export function saveNewDriver(driver) {
    debugger;
    return function (dispatch) {
        return axios.post(api, driver, {
            headers: {
                "Content-Type": "application/json"
            }
        }).
            then(response => {
                dispatch({ type: types.REQUEST_ADD_NEW_DRIVER, payload: response.data })
            }).
            catch(error => {
                console.log("Not working Add" + error)
            });
    }
};

export function updateDriver(id, driver) {
    debugger;
    return function (dispatch) {
        return axios.put(api + "/" + id, driver).
            then(response => {
                dispatch({ type: types.REQUEST_UPDATE_DRIVER, payload: response.data })
            }).
            catch(error => {
                console.log("Not working Update" + error)
            });
    }
};

export function deleteDriver(driverId) {
    return function (dispatch) {
        return axios.delete(api + "/" + driverId).
            then(response => {
                dispatch({ type: types.REQUEST_DELETE_DRIVER, payload: response.data })
            }).
            catch(error => {
                console.log("Not working Delete" + error)
            });
    }
};