import * as types from "./actionTypes";
import api from "../api/hostApi";
import axios from "axios";

export function fetchAllHosts() {
    return function (dispatch) {
        return axios.get(api).
            then(response => {
                dispatch({ type: types.REQUEST_GET_ALL_HOST, payload: response.data })
            }).
            catch(error => {
                console.log("Not working" + error
                )
            })
    }
};
export function saveNewHost(host) {
    debugger;
    return function (dispatch) {
        return axios.post(api, host, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).
            then(response => {
                dispatch({ type: types.REQUEST_ADD_NEW_HOST, payload: response.data })
            }).
            catch(error => {
                console.log("Not working ADD" + error
                )
            });
    };
}

export function updateHost(id, host) {
    debugger;
    return function (dispatch) {
        return axios.put(api + "/" + id, host
        ).
            then(response => {
                dispatch({ type: types.REQUEST_UPDATE_HOST, payload: response.data })
            }).
            catch(error => {
                console.log("Not Working Update" + error)
            });
    };
};

export function getByIdHost(hostId) {
    return function (dispatch) {
        return axios.get(api + "/" + hostId).
            then(response => {
                dispatch({ type: types.REQUEST_GET_BY_ID_HOST, payload: response.data })
            }).
            catch(error => {
                console.log("Not Working GetById" + error)
            });
    };
};
export function deleteHost(hostId) {
    return function (dispatch) {
        return axios.delete(api + "/" + hostId)
            .then((response) => {
                dispatch({ type: types.REQUEST_DELETE_HOST, payload: response.data });
            }).
            catch(error => {
                console.log("Not Working Delete" + error)
            });
    };
}