import {ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT} from '../action/crudActionType'

const initialState = [
    {
        id: 0, name: "Sok Dara", email: 'dara@gmail.com', phone: "081828282"
    },
    {
        id: 1, name: "Hong Hannha", email: 'hanah@gmail.com', phone: "098121312"
    },
    
];

export const contactReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CONTACT:
            state = [...state, action.payload]
            return state;
        case UPDATE_CONTACT:
            const conUpdate = state.filter( con => 
                con.id === action.payload.id ? Object.assign(con , action.payload)  : con    
            )
            state = conUpdate;
            return state    
        case DELETE_CONTACT:
            const value = state.filter( con =>
                con.id === action.payload ? null : con     
            )
            state = value;
            return state

        default:
            return state;
    }
}
