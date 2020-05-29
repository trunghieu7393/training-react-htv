import {SHOW_LOADING,HIDE_LOADING} from '../type';

const inititalState={
    showLoading: false,
}

const reducer =(state=inititalState,action)=> {
    switch (action.type){
        case SHOW_LOADING: {
            return {
                // ...state,
                showLoading:true,
            }
        }
        case HIDE_LOADING: {
            return {
                // ...state,
                showLoading:false,
            }
        }
        default:
            return state;
    }
}

export default reducer;