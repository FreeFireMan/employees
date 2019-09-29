import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    changeIsArchive,
    fetchProductsError,
    fetchProductsPending,
    fetchProductsSuccess,
    fetchPersonSucces,
    changeIsRole
} from "../../actions/employees-action";
import data from "../../Data";


class Profile extends Component {
    constructor(props){
        super(props)

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    shouldComponentRender() {
        console.log("test",this.props)
        const {pending} = this.props;

        return pending ? true : false;
    }

    handleChange(event) {
        this.props.changeIsRole(event.target.value);

    }
    componentDidMount() {
        this.props.fetchProductsSuccess(data);
        this.props.fetchProductsPending();
        const id = this.props.match.params.number;
        this.props.fetchPersonSucces(id);

        console.log("componentDidMount",this.props)




    }

    render() {
      //  const id = this.props.match.params.number;

        if(!this.shouldComponentRender()) return (<div>Загрузка</div>);
        const {person,role} = this.props;
        console.log("render", this.props);

        return (

            <form>

                <div className="form-group row">
                    <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">Ваше имя:</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="inputFirstName"
                               placeholder={person.name ? person.name : "First name"}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputDate" className="col-2 col-form-label">Date</label>
                    <div className="col-sm-9">
                        <input className="form-control" type="date" defaultValue={person.birthday ? person.birthday : "2011-08-19"} id="inputDate"/>
                       {/* <input className="form-control" type="date" value="2011-08-19" id="inputDate"/>*/}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputRole" className="col-sm-2 col-form-label">Должность:</label>
                    <div className="col-sm-9">
                       {/* <input type="text" className="form-control" id="inputFatherName"
                               placeholder={empl.role ? role.filter(i => (i.hasOwnProperty(empl.role)))[0][empl.role]  : "Father's name"}/>*/}
                        <select className="custom-select " id="inlineFormCustomSelect" value={person.role} onChange={this.handleChange}>
                            <option value="driver">{role[0].driver}</option>
                            <option value="ofic">{role[1].ofic}</option>
                            <option value="cook">{role[2].cook}</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Телефон:</label>
                    <div className="col-sm-9">
                        <input type="tel" defaultValue={person.phone?person.phone:"+7(555)-555-5555"} className="form-control"
                               id="example-tel-input" placeholder="Phone Number"/>
                    </div>
                </div>
                    {/* <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                   value="option1" checked/>
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    First radio
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                   value="option2"/>
                                <label className="form-check-label" htmlFor="gridRadios2">
                                    Second radio
                                </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
                                   value="option3" disabled/>
                                <label className="form-check-label" htmlFor="gridRadios3">
                                    Third disabled radio
                                </label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div className="form-group row">
                <div className="col-sm-2">Checkbox</div>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Example checkbox
                            </label>
                    </div>
                </div>
            </div>*/}
                <div className="form-group row">
                    <div className="col-sm-9">
                     {/*   <button type="button" className="btn btn-primary" onClick={props.saveProfile}>Сохранить
                            Изменения
                        </button>*/}
                    </div>
                </div>
            </form>

        )
    }
}
const mapStateToPrors = ({employees,pending,role,person}) => {
    return {employees,pending,role,person};
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPersonSucces:(id) => dispatch(fetchPersonSucces(id)),
        changeIsArchive: (id) => dispatch(changeIsArchive(id)),
        fetchProductsPending: () => dispatch(fetchProductsPending()),
        fetchProductsSuccess: (emploees) => dispatch(fetchProductsSuccess(emploees)),
        fetchProductsError: () => dispatch(fetchProductsError()),
        changeIsRole: (role) => dispatch(changeIsRole(role)),
    };
};
export default connect(mapStateToPrors, mapDispatchToProps)(Profile);