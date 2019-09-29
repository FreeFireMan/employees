import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import {
    changeIsArchive,
    fetchProductsError,
    fetchProductsPending,
    fetchProductsSuccess,
    fetchPersonSucces,
    changeIsRole,
    savePerson,
    changePersonIsArchive
} from "../../actions/employees-action";
import data from "../../Data";


class Profile extends Component {
    constructor(props) {
        super(props)

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveProfile = this.handleSaveProfile.bind(this);
        this.shouldFetchProducts = this.shouldFetchProducts.bind(this);

    }

    shouldComponentRender() {
        console.log("test", this.props)
        const {person} = this.props;

        return person ? true : false;
    }

    handleChange(event) {
        this.props.changeIsRole(event.target.value);

    }
    handleSaveProfile(){
        const pers={
            "id" : this.props.person.id,
            "name" : document.getElementById("inputFirstName").value,
            "birthday" : document.getElementById("inputBirthday").value,
            "role" : document.getElementById("inputRole").value,
            "phone" : document.getElementById("inputPhone").value,
            "isArchive" : document.getElementById("inputIsArchive").checked,
        }
        console.log("my pers",pers)
        this.props.savePerson(pers)

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
        const id = this.props.match.params.number;
        this.props.fetchPersonSucces(id);
        console.log("componentDidMount id", id)
        console.log("componentDidMount person ", this.props.person)
    }

    render() {
        //  const id = this.props.match.params.number;

        if (!this.shouldComponentRender()) return (<div>Загрузка</div>);
        const {person, role} = this.props;
        console.log("render person", this.props.person);

        return (

            <form>

                <div className="form-group row">
                    <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">Ваше имя:</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="inputFirstName"
                               defaultValue={person.name ? person.name : "First name"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputBirthday" className="col-2 col-form-label">Дата рождения:</label>
                    <div className="col-sm-9">
                        <input className="form-control" type="date"
                               defaultValue={person.birthday ? person.birthday : "2011-08-19"} id="inputBirthday"/>
                        {/* <input className="form-control" type="date" value="2011-08-19" id="inputDate"/>*/}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputRole" className="col-sm-2 col-form-label">Должность:</label>
                    <div className="col-sm-9">
                        <select className="custom-select " id="inputRole" value={person.role}
                                onChange={this.handleChange}>
                            <option value="driver">{role[0].driver}</option>
                            <option value="ofic">{role[1].ofic}</option>
                            <option value="cook">{role[2].cook}</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Телефон:</label>
                    <div className="col-sm-9">
                        <input type="tel" defaultValue={person.phone ? person.phone : "+7(555)-555-5555"}
                               className="form-control"
                               id="inputPhone" placeholder="Phone Number"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputIsArchive" className="col-sm-2 col-form-label">В архиве:</label>
                    <div className="col-sm-9">
                        <label className="containerForTree">
                            <input type="checkbox" value={person.isArchive} id="inputIsArchive" onChange={this.props.changePersonIsArchive} checked={person.isArchive}/>
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
        savePerson: (id) => dispatch(savePerson(id)),
        changePersonIsArchive: () => dispatch(changePersonIsArchive()),
    };
};
export default connect(mapStateToPrors, mapDispatchToProps)(Profile);