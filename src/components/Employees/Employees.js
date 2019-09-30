import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import data from '../../Data'

import './Employees.css'
import {
    changeIsArchive,
    fetchProductsPending,
    fetchProductsSuccess,
    fetchProductsError,
    deletePerson
} from "../../actions/employees-action";

class Employees extends Component {
    constructor(props){
        super(props)
        this.shouldFetchProducts = this.shouldFetchProducts.bind(this)
    }
    shouldFetchProducts() {
        console.log("test", this.props)
        const {pending} = this.props;

        return pending ? true : false;
    }
    componentDidMount() {
        if(!this.shouldFetchProducts()) {
            this.props.fetchProductsSuccess(data);
            this.props.fetchProductsPending();
        }
        this.props.deletePerson();
    }
    onChangeIsArchive=(e)=>{
      // this.props.changeIsArchive(e.target.value);
        console.log("onChangeIsArchive",e.target.value)
    }

    render() {
        const {employees, role} = this.props;


        return (
            <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Должность</th>
                    <th scope="col">В архиве</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees && employees.map(item =>
                        (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td><NavLink to={'/' + item.id}>{item.name}</NavLink></td>
                                <td>{item.phone}</td>
                                <td>{
                                    role.filter(i => (i.hasOwnProperty(item.role)))[0][item.role]
                                }</td>
                                <td>
                                    <label className="containerForTree">
                                        <input type="checkbox" disabled checked={item.isArchive}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
                <div className="col-sm-9">
                    <NavLink to={'/create/' + employees.length}>
                    <button type="button" className="btn btn-primary" >Добавить Сотрудника
                    </button>
                    </NavLink>
                </div>
            </div>
        );
    }

}


const mapStateToPrors = ({employees, role,pending}) => {
    return {employees, role,pending};
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeIsArchive: (id) => dispatch(changeIsArchive(id)),
        fetchProductsPending: () => dispatch(fetchProductsPending()),
        fetchProductsSuccess: (emploees) => dispatch(fetchProductsSuccess(emploees)),
        fetchProductsError: () => dispatch(fetchProductsError()),
        deletePerson: () => dispatch(deletePerson())
    };
};
export default connect(mapStateToPrors, mapDispatchToProps)(Employees);