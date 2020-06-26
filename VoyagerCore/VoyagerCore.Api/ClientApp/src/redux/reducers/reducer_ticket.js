import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
  contentType: null,
  statusCode: null,
  serializerSettings: null,
  capturedTicket: {
    id: null,
    side: "",
    passenger: null,
    seatNumber: "",
  },
  ticket: null,
  tickets: [],
};

export default function routeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_GET_BY_ID_TICKET:
      return {
        ...state,
        capturedTicket: action.payload,
      };
    case types.REQUEST_GET_ALL_TICKET:
      return {
        ...state,
        tickets: action.payload,
      };
    case types.REQUEST_CANCEL_TICKET:
      return {
        ...state,
        statusCode: action.payload.statusCode,
      };
    case types.REQUEST_SELL_TICKET:
      return {
        ...state,
        statusCode: action.payload.statusCode,
      };
    default:
      return state;
  }
}
