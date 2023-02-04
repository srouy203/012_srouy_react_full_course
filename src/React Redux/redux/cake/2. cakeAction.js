import { BUY_CAKE } from "./1. cakeTypes"  


export const buyCake = ( value = 1 ) => {             //action
    return {
        type: BUY_CAKE,
        payload: value
    }
}

