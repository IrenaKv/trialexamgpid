import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/patientdatabase" component={PatientDatabase} />
      </Switch>
    </div>
  );
}

export default App;
