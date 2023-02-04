import {REQUEST, FETCHING_SUCCESS, FETCHING_FAIL} from '../action/useActionTypes'

const initialState = {
    loading: false,
    users: [],
    error: ""
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCHING_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: ""
            }
        case FETCHING_FAIL:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
        default: 
            return state
    }
}

export default userReducer;


