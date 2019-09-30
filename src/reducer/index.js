import {
    CHANGE_EMPLOYEES_ISARCHIVE,
    CHANGE_PERSON_ROLE,
    CHANGE_PERSON_TEXT_INPUT,
    DELETE_PERSON,
    FETCH_EMPLOYEES_ERROR,
    FETCH_EMPLOYEES_PENDING,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_PERSON_SUCCESS, SAVE_NEW_PERSON,
    SAVE_PERSON
} from '../action-types';
import {placeholder} from "@babel/types";

const initialState = {
    employees: [],
    person: {},
    pending: false,
    error: null,
    role: [
        {driver: "Водитель"},
        {ofic: "Официант"},
        {cook: "Повар"}]
}
export default (state = initialState, action) => {
    const {payload} = action;
    const {employees, person} = state;
    let employeesCopy = [];
    let indexOfCurrentItem = "";
    let personCopy = {};
    switch (action.type) {
        case FETCH_EMPLOYEES_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                pending: false,
                employees: action.payload
            }
        case FETCH_EMPLOYEES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case CHANGE_EMPLOYEES_ISARCHIVE:
            employeesCopy = [...employees];
            indexOfCurrentItem = employeesCopy.findIndex((el) => el.id == payload);
            employeesCopy[indexOfCurrentItem].isArchive = !employeesCopy[indexOfCurrentItem].isArchive;
            return {...state, employees: employeesCopy};
        case FETCH_PERSON_SUCCESS:
            console.log("payload id", payload)
            const persCopy = [...employees];
            const pers = persCopy.filter(item => item.id == payload)[0]
            console.log("payload pers", pers)

            return {...state, person: pers};
        case CHANGE_PERSON_ROLE:
            personCopy = {...person};
            personCopy.role = payload;
            return {...state, person: personCopy};
        case DELETE_PERSON:
            return {...state, person: {}};

        case SAVE_PERSON:
            employeesCopy = [...employees];
            indexOfCurrentItem = employeesCopy.findIndex((el) => el.id == payload);
            console.log("SAVE_PERSON", person)
            employeesCopy[indexOfCurrentItem] = person;
            return {...state, employees: employeesCopy};

        case CHANGE_PERSON_TEXT_INPUT:
            return {...state, person: {...person, [payload[0]]: payload[1]}};
        case SAVE_NEW_PERSON:
                console.log("SAVE_NEW_PERSON",payload)
            employeesCopy = [...employees];
            employeesCopy.push(payload)
            return {...state, employees : employeesCopy};

        default:
            return state;
    }
}