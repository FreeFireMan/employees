import {
    ADD_ITEM_TO_CART,
    FETCH_EMPLOYEES_ERROR,
    FETCH_EMPLOYEES_PENDING,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_PERSON_SUCCESS,
    CHANGE_PERSON_ROLE,
    SAVE_PERSON,
    DELETE_PERSON,
    CHANGE_PERSON_ISARCHIVE,
    CHANGE_PERSON_TEXT_INPUT,
    SAVE_NEW_PERSON
} from '../action-types'
export const toggleItemToCart = (id) =>{
    return{
        type: ADD_ITEM_TO_CART,
        payload: id
    }
};
export const fetchPersonSucces = (id) =>{
    return{
        type: FETCH_PERSON_SUCCESS,
        payload: id
    }
};

export const changeIsArchive = (id) =>{
    return{
        type: DELETE_PERSON,
        payload: id
    }
};
export const saveNewPerson = (pers) =>{
    return{
        type: SAVE_NEW_PERSON,
        payload: pers
    }
};
export const deletePerson = () =>{
    return{
        type: DELETE_PERSON

    }
};
export const changePersonIsArchive = (id) =>{
    return{
        type: CHANGE_PERSON_ISARCHIVE,
        payload: id
    }
};
export const changePersonTextInput = (obj) =>{
    return{
        type: CHANGE_PERSON_TEXT_INPUT,
        payload: obj
    }
};
export const changeIsRole = (role) =>{
    return{
        type: CHANGE_PERSON_ROLE,
        payload: role
    }
};
export const savePerson = (id) =>{
    return{
        type: SAVE_PERSON,
        payload: id
    }
};
export function fetchProductsPending() {
    return {
        type: FETCH_EMPLOYEES_PENDING
    }
}

export function fetchProductsSuccess(employees) {
    return {
        type: FETCH_EMPLOYEES_SUCCESS,
        payload: employees
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_EMPLOYEES_ERROR,
        error: error
    }
}