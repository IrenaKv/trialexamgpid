import React from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Homepage from "./Homepage";
import PatientDatabase from "./PatientDatabase";
import DoctorSchedule from "./DoctorSchedule";
import PatientSignup from "./PatientSignup";

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home |</NavLink>
      <NavLink to="/doctorschedule">Doctor Schedule |</NavLink>
      <NavLink to="/patientsignup">Patient Signup |</NavLink>
      <NavLink to="/patientdatabase">Patient Database</NavLink>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/doctorschedule" component={DoctorSchedule} />
        <Route exact path="/patientsignup" component={PatientSignup} />
        <Route exact path="/patientdatabase" component={PatientDatabase} />
      </Switch>
    </div>
  );
}

export default App;
