import { POST_DATA_API_SUCCESS, POST_DATA_API_FAIL } from '../type';


export const postDataAPISuccess = (payload) => {
    return {
        type: POST_DATA_API_SUCCESS,
        payload
    }
}
export const postDataAPIFail = (payload) => {
    return {
        type: POST_DATA_API_FAIL,
        payload
    }
}
// export const readRedux = (data) => dispatch => {
//     dispatch({
//         type: READ_REDUX,
//         payload: data
//     })
// }
// export const updateRedux = (data) => dispatch => {
//     dispatch({
//         type: UPDATE_REDUX,
//         payload: data
//     })
// }
// export const deleteRedux = (data) => dispatch => {
//     dispatch({
//         type: DELETE_REDUX,
//         payload: data
//     })
// }