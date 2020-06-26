import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
    hosts: [],
    contentType: null,
    statusCode: null,
    serializerSettings: null,
    newHost: {
        id: null,
        name: null,
        lastName: null,
        identityNumber: null,
        gender: null,
        date: null
    },
    capturedHost: null,
    host: null,
};

export default function hostReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.REQUEST_GET_ALL_HOST:
            return {
                ...state,
                hosts: action.payload.value,
                statusCode: action.payload.statusCode
            };
        case types.REQUEST_ADD_NEW_HOST:
            return {
                ...state,
                statusCode: action.payload.statusCode
            };
        case types.REQUEST_UPDATE_HOST:
            return {
                ...state,
                statusCode: action.payload.statusCode,
                contentType: action.payload.contentType
            };
        case types.REQUEST_GET_BY_ID_HOST:
            return {
                ...state,
                capturedHost: action.payload.value
            };
        case types.REQUEST_DELETE_HOST:
            return {
                ...state,
                statusCode: action.payload.statusCode
            };
        default:
            return state;
    }
}