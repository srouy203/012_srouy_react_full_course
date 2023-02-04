import axios from 'axios'
import {REQUEST, FETCHING_SUCCESS, FETCHING_FAIL} from './useActionTypes'

export const request = () => {
    return{
        type: REQUEST
    }
}
export const fetching_success = (data) =>{
    return{
        type: FETCHING_SUCCESS,
        payload: data
    }
}
export const fetching_fail = (error) => {
    return{
        type: FETCHING_FAIL,
        payload: error
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(request());
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                dispatch(fetching_success(res.data));
            })
            .catch(err=>{
                dispatch(fetching_fail(err.massage));
            })
    }
}


