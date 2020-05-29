import {  POST_DATA_API_SUCCESS, POST_DATA_API_FAIL } from '../type';

const initialState = {
data:[]
}

export default function (state = initialState, action) {
    switch (action.type) {
        
        case POST_DATA_API_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case POST_DATA_API_FAIL:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}