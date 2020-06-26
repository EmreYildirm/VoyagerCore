import * as types from "./actionTypes";
import api from "../api/routeApi";
import axios from "axios";


export function fetchAllRoutes() {
    return function (dispatch) {
        return axios.get(api).
            then(response => {
                dispatch({ type: types.REQUEST_GET_ALL_ROUTE, payload: response.data })
            }).
            catch(error => {
                console.log("Not working Fetch Data" + error
                )
            })
    }
};
export function saveNewRoute(route) {
    debugger;
    return function (dispatch) {
        return axios.post(api, route, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).
            then(response => {
                dispatch({ type: types.REQUEST_ADD_NEW_ROUTE, payload: response.data })
            }).
            catch(error => {
                console.log("Not working ADD" + error
                )
            });
    };
}
export function updateRoute(id, route) {
    return function (dispatch) {
        return axios.put(api + "/" + id, route
        ).then(response => {
            dispatch({ type: types.REQUEST_UPDATE_ROUTE, payload: response.data })
        }).
            catch(error => {
                console.log("Not working Update" + error)
            });
    }
}

export function getByIdRoute(routeId) {
    return function (dispatch) {
        return axios.get(api + "/" + routeId).
            then((response) => {
                dispatch({
                    type: types.REQUEST_GET_BY_ID_ROUTE,
                    payload: response.data,
                })
            }).
            catch(error => {
                console.log("Not working GetById" + error)
            });
    }
}

export function deleteRoute(routeId) {
    debugger;
    return function (dispatch) {
        return axios.delete(api + "/" + routeId)
            .then((response) => {
            dispatch({ type: types.REQUEST_DELETE_ROUTE, payload: response.data });
        }).
            catch(error => {
                console.log("Not working delete" + error)
            });

    };
}