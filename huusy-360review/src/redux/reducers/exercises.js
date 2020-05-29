import {PLUS1,PLUS2} from '../type';

const inititalState={
    plus1:'',
    plus2:''
}
// ------------------------------------Cách 1---------------------------------//
export default function (state=inititalState,action){
    // let newState = Object.assign({}, state)
    switch (action.type){
        case PLUS1: {
            return {
                ...state, //es6 
                plus1:action.payload,
                
            }
        }
        case PLUS2: {
            state.plus2 = action.payload
            return state
        }
        default:
            return state;
    }
}
// ------------------------------------Cách 2---------------------------------//
// export default function (state=inititalState,action){
//     switch (action.type){
//         case PLUS1: {
//             return Object.assign({}, state, {
//                 plus1:action.payloads
//               })
//         }
//         case PLUS2: {
//             return Object.assign({}, state, {
//                 plus2:action.payload
//               })
//         }
//         default:
//             return state;
//     }
// }
// ------------------------------------Cách 3---------------------------------//
// export default function (state=inititalState,action){
//     switch (action.type){
//         case PLUS1: {
//             return Object.assign({plus1:action.payload}, {plus2:state.plus2})
//         }
//         case PLUS2: {

//             return Object.assign({plus1:state.plus1}, {plus2:action.payload})
//         }
//         default:
//             return state;
//     }
// }