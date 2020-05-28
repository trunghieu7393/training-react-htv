import { CREATE_REDUX, READ_REDUX, UPDATE_REDUX, DELETE_REDUX, POST_DATA_API_SUCCESS, POST_DATA_API_FAIL } from '../type';

// export const createRedux = (payload) => {
//     return {
//         type: CREATE_REDUX,
//         payload
//     }
// }
export const createRedux = (data) => dispatch => {
    dispatch({
      type: CREATE_REDUX,
      payload: data
    })
  }
export const readRedux = (payload) => {
    return {
        type: READ_REDUX,
        payload
    }
}
export const updateRedux = (payload) => {
    return {
        type: UPDATE_REDUX,
        payload
    }
}
export const deleteRedux = (payload) => {
    return {
        type: DELETE_REDUX,
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