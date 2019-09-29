import {
    ADD_ITEM_TO_CART,
    FETCH_EMPLOYEES_ERROR,
    FETCH_EMPLOYEES_PENDING,
    FETCH_EMPLOYEES_SUCCESS,
    CHANGE_EMPLOYEES_ISARCHIVE,
    FETCH_PERSON_SUCCESS,
    CHANGE_PERSON_ROLE
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
        type: CHANGE_EMPLOYEES_ISARCHIVE,
        payload: id
    }
};export const changeIsRole = (role) =>{
    return{
        type: CHANGE_PERSON_ROLE,
        payload: role
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