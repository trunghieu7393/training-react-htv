import { CREATE_REDUX, READ_REDUX, UPDATE_REDUX, DELETE_REDUX } from '../type';

const initialState = {

}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_REDUX:
            return {
                ...state,
                data: action.payload
            }
        case READ_REDUX:
            return {
                ...state,
                data: action.payload
            }
        case UPDATE_REDUX:
            return {
                ...state,
                data: action.payload
            }
        case DELETE_REDUX:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}