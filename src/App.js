import React from 'react';
import './App.css';
import Employees from "./components/Employees";
import {Route, Switch} from "react-router-dom";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div >
        <Switch>
            <Route exact path="/:number" component={Profile}/>
            <Route path="/" render={(props) => (
                <Employees/>
            )}/>
        </Switch>

    </div>
  );
}

export default App;
