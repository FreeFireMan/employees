import React, {Component} from 'react';
import {connect} from 'react-redux';
import data from '../../Data'

import './Employees.css'
import {
    changeIsArchive,
    fetchProductsPending,
    fetchProductsSuccess,
    fetchProductsError
} from "../../actions/employees-action";

class Employees extends Component {
    componentDidMount() {
        this.props.fetchProductsPending();
        this.props.fetchProductsSuccess(data);
    }
    onChangeIsArchive=(e)=>{
       this.props.changeIsArchive(e.target.value);
        console.log("onChangeIsArchive",e.target.value)
    }

    render() {
        const {employees, role} = this.props;


        return (
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
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{
                                    role.filter(i => (i.hasOwnProperty(item.role)))[0][item.role]
                                }</td>
                                <td>
                                    <label className="containerForTree">
                                        <input type="checkbox" value={item.id} onChange={this.onChangeIsArchive} checked={item.isArchive}/>
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        );
    }

}


const mapStateToPrors = ({employees, role}) => {
    return {employees, role};
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeIsArchive: (id) => dispatch(changeIsArchive(id)),
        fetchProductsPending: () => dispatch(fetchProductsPending()),
        fetchProductsSuccess: (emploees) => dispatch(fetchProductsSuccess(emploees)),
        fetchProductsError: () => dispatch(fetchProductsError())
    };
};
export default connect(mapStateToPrors, mapDispatchToProps)(Employees);