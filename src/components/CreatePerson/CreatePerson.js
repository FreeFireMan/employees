import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import {
    changeIsArchive,
    changeIsRole,
    changePersonTextInput,
    fetchPersonSucces,
    fetchProductsError,
    fetchProductsPending,
    fetchProductsSuccess,
    saveNewPerson
} from "../../actions/employees-action";
import data from "../../Data";



class CreatePerson extends Component {
    constructor(props) {
        super(props)

        this.handleSaveProfile = this.handleSaveProfile.bind(this);
        this.shouldFetchProducts = this.shouldFetchProducts.bind(this);


    }


    handleSaveProfile(){
        const pers ={
            "id" : (+this.props.match.params.number+1),
            "name" : document.getElementById("inputName").value,
            "birthday" : document.getElementById("inputBirthday").value,
            "role" : document.getElementById("inputRole").value,
            "phone" : document.getElementById("inputPhone").value,
            "isArchive" : document.getElementById("inputIsArchive").checked,
        }
        this.props.saveNewPerson(pers)

    }
    shouldFetchProducts() {
        console.log("shouldFetchProducts", this.props.pending)
        const {pending} = this.props;

        return pending ? true : false;
    }


    componentDidMount() {
        if(!this.shouldFetchProducts()){
            this.props.fetchProductsSuccess(data);
            this.props.fetchProductsPending();
        }

    }

    render() {
        const {role} = this.props;
        return (

            <form>

                <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Ваше имя:</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="inputName"
                               defaultValue="Enter name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputBirthday" className="col-2 col-form-label">Дата рождения:</label>
                    <div className="col-sm-9">
                        <input className="form-control" type="date"
                               defaultValue="2011-08-19" id="inputBirthday"
                              />
                        {/* <input className="form-control" type="date" value="2011-08-19" id="inputDate"/>*/}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputRole" className="col-sm-2 col-form-label">Должность:</label>
                    <div className="col-sm-9">
                        <select className="custom-select " id="inputRole"
                                >
                            <option value="driver">{role[0].driver}</option>
                            <option value="ofic">{role[1].ofic}</option>
                            <option value="cook">{role[2].cook}</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Телефон:</label>
                    <div className="col-sm-9">
                        <input type="tel" defaultValue="+7(555)-555-5555"
                               className="form-control"
                               id="inputPhone" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputIsArchive" className="col-sm-2 col-form-label">В архиве:</label>
                    <div className="col-sm-9">
                        <label className="containerForTree">
                            <input type="checkbox"  id="inputIsArchive" defaultChecked={false}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-9">
                        <button type="button" className="btn btn-primary" onClick={this.handleSaveProfile}>Сохранить
                            Изменения
                        </button>
                    </div>
                    <div className="col-sm-9">
                        <NavLink to={'/'}>На главное Окно
                        </NavLink>
                    </div>
                </div>
            </form>

        )
    }
}

const mapStateToPrors = ({employees, pending, role, person}) => {
    return {employees, pending, role, person};
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPersonSucces: (id) => dispatch(fetchPersonSucces(id)),
        changeIsArchive: (id) => dispatch(changeIsArchive(id)),
        fetchProductsPending: () => dispatch(fetchProductsPending()),
        fetchProductsSuccess: (emploees) => dispatch(fetchProductsSuccess(emploees)),
        fetchProductsError: () => dispatch(fetchProductsError()),
        changeIsRole: (role) => dispatch(changeIsRole(role)),
        saveNewPerson: (pers) => dispatch(saveNewPerson(pers)),
        changePersonTextInput: (name) => dispatch(changePersonTextInput(name)),
    };
};
export default connect(mapStateToPrors, mapDispatchToProps)(CreatePerson);