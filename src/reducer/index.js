import {
    CHANGE_EMPLOYEES_ISARCHIVE, CHANGE_PERSON_ROLE,
    FETCH_EMPLOYEES_ERROR,
    FETCH_EMPLOYEES_PENDING,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_PERSON_SUCCESS
} from '../action-types';

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
    const {employees,person} = state;
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
            const employeesCopy = [...employees];
            // console.log(employees,state,action,payload)
            const indexOfCurrentItem = employeesCopy.findIndex((el) => el.id == payload);
            // console.log("indexOfCurrentItem",indexOfCurrentItem);
            employeesCopy[indexOfCurrentItem].isArchive = !employeesCopy[indexOfCurrentItem].isArchive;
            return {...state, employees: employeesCopy};

        case FETCH_PERSON_SUCCESS:
            const pers = employees.filter(item => item.id == payload)[0]

            return {...state, person: pers};
        case CHANGE_PERSON_ROLE:
            const personCopy =person;
            personCopy.role = payload;
            console.log("personCopy",personCopy)
            return {...state, person: personCopy};

        default:
            return state;
    }
}