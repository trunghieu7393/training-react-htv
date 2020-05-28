import {SHOW_LOADING,HIDE_LOADING} from '../type';

export const showLoading=()=>({
    type: SHOW_LOADING,
})
export const hideLoading=()=>({
    type: HIDE_LOADING,
})