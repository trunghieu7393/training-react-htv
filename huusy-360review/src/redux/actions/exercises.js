import { PLUS1, PLUS2 } from '../type';


export const plus1 = (payload) => {
    return {
        type: PLUS1,
        payload
    }
}
export const plus2 = (payload) => {
    return {
        type: PLUS2,
        payload
    }
}