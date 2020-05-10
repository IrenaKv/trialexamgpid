import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // useParams contains the id as a way to get info from the URL

//https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/5856675843

export default function () {
  const [patientDetails, set_patientDetails] = useState({});
  const parameters = useParams(); //pulling out the id,holder for patient id ---> later to be used in URL
  useEffect(() => {
    async function fetchDetails() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${parameters.patientid}` //the name has to be the same like in app.js
      );
      set_patientDetails(response.data);
    }
    fetchDetails();
  }, []); // please run yourself when someone goes to this page by the "[]"

  return (
    <div>
      <h1>id: {patientDetails.id}</h1>
      <h1>
        {patientDetails.firstName} {patientDetails.lastName}
      </h1>
      <h1>{patientDetails.gender}</h1>
      <h1>{patientDetails.dateOfBirth}</h1>
      <h1>
        contact details:{" "}
        <ul>
          <li>{patientDetails.email}</li>
        </ul>
        <ul>
          <li> {patientDetails.phoneNumber}</li>
        </ul>
      </h1>
      <h1>prescriptions: {patientDetails.prescriptions}</h1>
    </div>
  );
}
