import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
  expeditions: [],
  contentType: null,
  statusCode: null,
  serializerSettings: null,
  newExpedition: {
    hostId: null,
    routeId: null,
    busId: null,
    driverId: null,
    departureDate: null,
  },
  capturedExpedition: null,
  expedition: null,
};

export default function expeditionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_GET_ALL_EXPEDITIONS:
      return {
        ...state,
        expeditions: action.payload.value,
        statusCode: action.payload.statusCode,
      };
    case types.REQUEST_GET_BY_ID_EXPEDITION:
      return {
        ...state,
        capturedExpedition: action.payload.value,
      };
    case types.REQUEST_ADD_NEW_EXPEDITION:
      return {
        ...state,
        statusCode: action.payload.statusCode,
      };
    case types.REQUEST_UPDATE_EXPEDITION:
      return {
        ...state,
        statusCode: action.payload.statusCode,
        contentType: action.payload.contentType,
      };
    case types.REQUEST_DELETE_EXPEDITION:
      return {
        ...state,
        statusCode: action.payload.statusCode,
      };
    default:
      return state;
  }
}
