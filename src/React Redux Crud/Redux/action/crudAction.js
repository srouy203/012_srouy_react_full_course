import {ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT} from './crudActionType'

export const addContact = (data) => {
    return{
        type: ADD_CONTACT,
        payload: data
    }
}

export const delContact = (id) => {
    return{
        type: DELETE_CONTACT,
        payload: id
    }
}

export const updateContact = (data) => {
    return{
        type: UPDATE_CONTACT,
        payload: data
    }
}