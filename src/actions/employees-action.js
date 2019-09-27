import {
    ADD_ITEM_TO_CART,
    FETCH_EMPLOYEES_ERROR,
    FETCH_EMPLOYEES_PENDING,
    FETCH_EMPLOYEES_SUCCESS,
    CHANGE_EMPLOYEES_ISARCHIVE
} from '../action-types'
export const toggleItemToCart = (id) =>{
    return{
        type: ADD_ITEM_TO_CART,
        payload: id
    }
};
export const changeIsArchive = (id) =>{
    return{
        type: CHANGE_EMPLOYEES_ISARCHIVE,
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