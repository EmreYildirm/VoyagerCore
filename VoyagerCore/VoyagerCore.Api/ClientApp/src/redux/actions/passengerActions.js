import * as types from "./actionTypes";
import api from "../api/passengerApi";
import axios from "axios";


export function saveNewPassenger(passenger) {
    debugger;
    return function (dispatch) {
        return axios.post(api , passenger, ).
            then(response => {
                dispatch({ type: types.REQUEST_ADD_NEW_PASSENGER, payload: response.data })
            }).
            catch(error => {
                console.log("Not working Add passenger" + error)
            });
    }
};

//{
//    headers: {
//        "Content-Type": "application/json"
//    }
//}