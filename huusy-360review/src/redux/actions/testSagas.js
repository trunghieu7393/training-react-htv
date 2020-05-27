import { CREATE_REDUX, READ_REDUX, UPDATE_REDUX, DELETE_REDUX } from '../type';

export const createRedux = (payload) => {
    return {
        type: CREATE_REDUX,
        payload
    }
}
export const readRedux = (data) => dispatch => {
    dispatch({
        type: READ_REDUX,
        payload: data
    })
}
export const updateRedux = (data) => dispatch => {
    dispatch({
        type: UPDATE_REDUX,
        payload: data
    })
}
export const deleteRedux = (data) => dispatch => {
    dispatch({
        type: DELETE_REDUX,
        payload: data
    })
}