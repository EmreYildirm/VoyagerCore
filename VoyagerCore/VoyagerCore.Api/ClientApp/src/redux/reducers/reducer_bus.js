import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
    buses: [],
    contentType: null,
    statusCode: null,
    serializerSettings: null,
    newBus: {
        id: null,
        plate: null,
        make: null
    },
    capturedBus: null,
    bus: null,
};

export default function busReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.REQUEST_GET_ALL_BUS:
            return {
                ...state,
                buses: action.payload.value,
                statusCode: action.payload.statusCode,
            };
        case types.REQUEST_ADD_NEW_BUS:
            return { ...state, statusCode: action.payload.statusCode };
        case types.REQUEST_UPDATE_BUS:
            return {
                ...state,
                statusCode: action.payload.statusCode,
                contentType: action.payload.contentType,
            }
        case types.REQUEST_GET_BY_ID_BUS:
            return {
                ...state,
                capturedBus: action.payload.value
            };
        case types.REQUEST_DELETE_BUS:
            return {
                ...state,
                statusCode: action.payload.statusCode,
            }
        default:
            return state;
    }
}