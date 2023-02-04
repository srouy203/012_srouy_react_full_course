import { BUY_CANDY } from "./candType";

export const buyCandy = (value = 1) => {
    return{
        type: BUY_CANDY,
        payload: value
    }
}
