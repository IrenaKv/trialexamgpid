import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PatientDatabase() {
  const [patientList, set_patientList] = useState([]);
  const [filterpatientList, set_filteredPatientList] = useState([]); // this is like toolbox, patientList is a data holder containing all the data and set_patient list is a "verb/action" what I will want to do and useState is a "buddle" of possiblities/different actions that can be done like a "toolbox"

  useEffect(() => {
    //by this I am setting the function to run whenever I direct it to
    async function fetchPatients() {
      //telling Axios what to do, but not yet when to do  it
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );
      set_patientList(response.data);
      set_filteredPatientList(response.data); // 1. step was to console.log(response) 2. after we console.log(response.data) to seee the number of patiences, after that we deleted console log and then we set the patient list to be equalt to the info about by putting data I narrowed the data
    } // these empty square bracets are an indication to run the code when come to the website, unrelated to the [] above
    // const fetchPatients = async () => {} ----> same as below
    //async function fetchPatients() {} ------> this is the same as above
    fetchPatients();
  }, []);

  function filteredPatientList(e) {
    const docId = parseInt(e.target.value); // get filter value from select
    console.log(typeof e.target.value);
    if (docId === 0) {
      set_filteredPatientList(patientList);
    } else {
      set_filteredPatientList(
        patientList.filter((patient) => patient.doctorId === docId)
      );
    }
    console.log(filterpatientList);
  }

  return (
    <div>
      <h1>I am the patient database</h1>
      <p>
        Sort order:{" "}
        <select onChange={filteredPatientList}>
          <option value="0">All</option>
          <option value="1">Doctor 1</option>
          <option value="2">Doctor 2</option>
          <option value="3">Doctor 3</option>
        </select>
      </p>
      {filterpatientList.map((patient) => {
        //previously was patience list which we changed to filterpatientList
        return (
          <div>
            <h5 className="PatientDatabase">
              <p>
                This is the full name: {patient.firstName} {patient.lastName}
              </p>
              <p>This is the patient id: {patient.id}</p>
              <p>Date of Birth: {patient.dateOfBirth}</p>
              <button>To do: link with patient details</button>
            </h5>
          </div>
        );
      })}
    </div>
  );
}
