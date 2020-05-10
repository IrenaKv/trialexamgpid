import React, { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";

//API https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors

export default function DoctorSchedule() {
  const [doctorList, set_doctorList] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      console.log(response);

      set_doctorList(response.data);
    }
    fetchDoctors();
  }, []);

  return (
    // to get rid of the key alert I need to generate a unique key for the element and I need to place it within the div starting componenet (could also be <li> element or any other element)
    <div>
      <h1>I am the doctors list</h1>
      {doctorList.map((doctorscard) => {
        // console.log(doctorscard); // this console log when run it shows inside console all the doctors, one by one
        return (
          <div key={doctorscard.id}>
            <p>{doctorscard.doctor}</p>
            <p>{doctorscard.onDuty ? "on duty" : "on vacation"}</p>
          </div>
        );
      })}
      <Contact phonenumber="020 5555 555" />
    </div>
  );

  // return (
  //   <div>
  //     <h1>Who is on duty?</h1>
  //     <h5>Doctor </h5>
  //     <h5>availability</h5>
  //     <Contact />
  //   </div>
  // );
}
