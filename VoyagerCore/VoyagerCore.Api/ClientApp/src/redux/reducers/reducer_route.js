import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
  routes: [],
  contentType: null,
  statusCode: null,
  serializerSettings: null,
  newRoute: {
    id: null,
    departureLocation: null,
    arrivalLocation: null,
    distance: null,
  },
  capturedRoute: null,
  route: null,
};

export default function routeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_GET_ALL_ROUTE:
      return {
        ...state,
        routes: action.payload.value,
        statusCode: action.payload.statusCode,
      };
    case types.REQUEST_ADD_NEW_ROUTE:
      return { ...state, statusCode: action.payload.statusCode };
    case types.REQUEST_UPDATE_ROUTE:
      return {
        ...state,
        statusCode: action.payload.statusCode,
        contentType: action.payload.contentType,
      };
    case types.REQUEST_GET_BY_ID_ROUTE:
      return {
        ...state,
        capturedRoute: action.payload.value,
      };
    case types.REQUEST_DELETE_ROUTE:
      return {
        ...state,
        statusCode: action.payload.statusCode,
      };
    default:
      return state;
  }
}
