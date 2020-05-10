import React from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";

export default function Homepage() {
  //phone number will have to be put as a prop into another component
  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <Contact phonenumber="020 5555 555" />
      <h1>
        <Link to="/doctorschedule">
          <button>Who is on duty?</button>
        </Link>
      </h1>
      <h1>
        <Link to="patientsignup">
          <button>I am a new patient</button>
        </Link>
      </h1>
    </div>
  );
}
