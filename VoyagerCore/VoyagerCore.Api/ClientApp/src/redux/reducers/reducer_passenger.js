import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
  passengers: [],
  contentType: null,
  statusCode: null,
  serializerSettings: null,
  newPassenger: {
    id: null,
    name: null,
    lastName: null,
    gender: null,
    date: null,
  },
  capturedPassenger: null,
  passenger: null,
};

export default function passengerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_ADD_NEW_PASSENGER:
      return {
        ...state,
        statusCode: action.payload.statusCode,
      };
    default:
      return state;
  }
}
