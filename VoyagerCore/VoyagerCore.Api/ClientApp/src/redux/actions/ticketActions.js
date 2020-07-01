import * as types from "./actionTypes";
import api from "../api/ticketApi";
import axios from "axios";

export function getByIdTicket(expeditionId, seatNumber) {
    debugger;
    return function (dispatch) {
        return axios.get(api + expeditionId + "/tickets/" + seatNumber).
            then((response) => {
                dispatch({
                    type: types.REQUEST_GET_BY_ID_TICKET,
                    payload: response.data,
                })
            }).
            catch(error => {
                console.log("Not working GetById" + error)
            });
    }
}
export function getTickets(expeditionId) {
    return function (dispatch) {
        return axios.get(api + expeditionId + "/tickets").
            then((response) => {
                dispatch({
                    type: types.REQUEST_GET_ALL_TICKET,
                    payload: response.data,
                })
            }).
            catch(error => {
                console.log("Not working getAll" + error)
            });
    }
}

export function cancelTicket(expeditionId, seatNumber) {
    return function (dispatch) {
        return axios.put(api + expeditionId + "/tickets/cancelTicket/" + seatNumber
        ).then((response) => {
            dispatch({ type: types.REQUEST_CANCEL_TICKET, payload: response.data });
        }).
            catch(error => {
                console.log("Not working cancel" + error)
            });

    };
}

export function sellTicket(expeditionId, seatNumber, passenger) {
    debugger;
    return function (dispatch) {
        return axios.put(api + expeditionId + "/tickets/sellTicket/" + seatNumber , passenger
        ).
            then(response => {
            dispatch({ type: types.REQUEST_SELL_TICKET, payload: response.data })
        }).
            catch(error => {
                console.log("Not working sell" + error)
            });
    }
}