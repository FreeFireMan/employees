import React from 'react';
import './App.css';
import Employees from "./components/Employees";
import {Route, Switch} from "react-router-dom";
import Profile from "./components/Profile";
import CreatePerson from "./components/CreatePerson";

function App() {
  return (
    <div >
        <Switch>
            <Route exact path="/create/:number" component={CreatePerson}/>
            <Route exact path="/:number" component={Profile}/>
            <Route path="/" render={(props) => (
                <Employees/>
            )}/>
        </Switch>

    </div>
  );
}

export default App;
