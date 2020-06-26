import * as types from "./actionTypes";
import api from "../api/expeditionApi";
import axios from "axios";

export function fetchAllExpeditions(datetime) {
    debugger;
    return function (dispatch) {
        return axios.get(api + "/" + datetime).
            then(response => {
                dispatch({ type: types.REQUEST_GET_ALL_EXPEDITIONS, payload: response.data })
            }).
            catch(error => {
                console.log("Not working" + error
                )
            })
    }
};
export function saveNewExpedition(expedition) {
    debugger;
    return function (dispatch) {
        return axios.post(api, expedition, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).
            then(response => {
                dispatch({ type: types.REQUEST_ADD_NEW_EXPEDITION, payload: response.data })
            }).
            catch(error => {
                console.log("Not working ADD" + error
                )
            });
    };
}

export function updateExpedition(id, expedition) {
    debugger;
    return function (dispatch) {
        return axios.put(api + "/" + id, expedition
        ).
            then(response => {
                dispatch({ type: types.REQUEST_UPDATE_EXPEDITION, payload: response.data })
            }).
            catch(error => {
                console.log("Not Working Update" + error)
            });
    };
};

export function getByIdExpedition(expeditionId) {
    return function (dispatch) {
        return axios.get(api + "/" + expeditionId).
            then(response => {
                dispatch({ type: types.REQUEST_GET_BY_ID_EXPEDITION, payload: response.data })
            }).
            catch(error => {
                console.log("Not Working GetById" + error)
            });
    };
};
export function deleteExpedition(expeditionId) {
    return function (dispatch) {
        return axios.delete(api + "/" + expeditionId)
            .then((response) => {
                dispatch({ type: types.REQUEST_DELETE_EXPEDITION, payload: response.data });
            }).
            catch(error => {
                console.log("Not Working Delete" + error)
            });
    };
}