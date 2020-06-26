import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
  drivers: [],
  contentType: null,
  statusCode: null,
  serializerSettings: null,
  newDriver: {
    id: null,
    name: null,
    lastName: null,
    gender: null,
    identityNumber: null,
    date: null,
  },
  capturedDriver: null,
  driver: null,
};

export default function driverReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_GET_ALL_DRIVER:
      return {
        ...state,
        drivers: action.payload.value,
        statusCode: action.payload.statusCode,
      };
    case types.REQUEST_GET_BY_ID_DRIVER:
      return {
        ...state,
        capturedDriver: action.payload.value,
      };
    case types.REQUEST_ADD_NEW_DRIVER:
      return {
        ...state,
        statusCode: action.payload.statusCode,
      };
    case types.REQUEST_UPDATE_DRIVER:
      return {
        ...state,
        statusCode: action.payload.statusCode,
        contentType: action.payload.contentType,
      };
    case types.REQUEST_DELETE_DRIVER:
      return {
        ...state,
        statusCode: action.payload.statusCode,
      };
    default:
      return state;
  }
}
