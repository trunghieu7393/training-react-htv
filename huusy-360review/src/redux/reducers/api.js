import { POST_DATA_API_SUCCESS, POST_DATA_API_FAIL, FILTER_TASK, FILTER_TASK_SUCCESS, FILTER_TASK_FAIL } from '../type';

const initialState = {
    data: []
}

// export default function (state = initialState, action) {
//     switch (action.type) {

//         case POST_DATA_API_SUCCESS:
//             return Object.assign({}, state, {
//                                  data:action.payloads
//                                })
//         case POST_DATA_API_FAIL:
//             return {
//                 ...state,
//                 data: action.payload
//             }
//         case FILTER_TASK:
//             return {
//                 ...state,
                
//             }
//         case FILTER_TASK_SUCCESS:
//             return Object.assign({}, state, {
//                 data:action.payloads
//               })
//         case POST_DATA_API_FAIL:
//             return {
//                 ...state,
                
//             }
//         default:
//             return state;
//     }
// }

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
        case FILTER_TASK:
            return {
                ...state,
                
            }
        case FILTER_TASK_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case POST_DATA_API_FAIL:
            return {
                ...state,
                
            }
        default:
            return state;
    }
}