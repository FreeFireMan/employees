import {FETCH_EMPLOYEES_ERROR,
    FETCH_EMPLOYEES_PENDING,
    FETCH_EMPLOYEES_SUCCESS,
    CHANGE_EMPLOYEES_ISARCHIVE} from '../action-types';
const initialState={
    employees: [],
    pending: false,
    error: null,
    role : [
        {driver:"Водитель"},
        {ofic:"Официант"},
        {cook:"Повар"}]
}
export default (state = initialState ,action)=>{
    switch(action.type) {
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
                const {payload} = action;
                const {employees} = state;
                const employeesCopy = [...employees];
               // console.log(employees,state,action,payload)
                const indexOfCurrentItem = employeesCopy.findIndex((el)=>el.id == payload);
               // console.log("indexOfCurrentItem",indexOfCurrentItem);
                employeesCopy[indexOfCurrentItem].isArchive = !employeesCopy[indexOfCurrentItem].isArchive;
                return {...state, employees: employeesCopy};
        default:
            return state;
    }
}