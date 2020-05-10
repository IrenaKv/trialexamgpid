import React, { useState } from "react";

export default function PatientSignup() {
  const [message, set_message] = useState("");
  const [newPatient, set_newPatient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "female", //puting female as "default" otherwise when submitting female option for the first time then it does not print to the console first time when female is selected
  }); //setting up
  // 1. "label" gives it name to the input, user friendly 2. "input" need to write e.g. type="text" or "date" 4. on Change is a function that gives a parametr, it needs an even parametr, on Change is an event listener
  function handleChange(event) {
    set_newPatient({ ...newPatient, [event.target.name]: event.target.value });
    set_message(""); // this is for the submitted message to disappear when you start typing again inside the form
  }
  //we will set the state to hold the information in, we will use set_newPatient
  function onSubmitAddPatient(event) {
    // when you are using on submit inside this function, it has to be this piece of code, not a different, as a FIRST LINE of the function
    // on Submit function! see the code below
    event.preventDefault();
    console.log(newPatient);
    set_message("form was submitted"); // message after submitting the form
    set_newPatient({
      // set_newPatient is reseting the form back to being empty, info copied from line 6-11 ---> setting it to the intial state, empty object
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      phoneNumber: "",
      gender: "female",
    });
  }
  return (
    <div>
      <h1>Patient Signup</h1>
      <p>{message}</p>

      <form onSubmit={onSubmitAddPatient}>
        <label>first name</label>
        <input
          type="text"
          name="firstName"
          value={newPatient.firstName}
          onChange={handleChange}
        />
        <label>last name</label>
        <input
          type="text"
          name="lastName"
          value={newPatient.lastName}
          onChange={handleChange}
        />
        <label>email</label>
        <input
          type="text"
          name="email"
          value={newPatient.email}
          onChange={handleChange}
        />
        <label>date of birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={newPatient.dateOfBirth}
          onChange={handleChange}
        />
        <label>phone number</label>
        <input
          type="text"
          name="phoneNumber"
          value={newPatient.phoneNumber}
          onChange={handleChange}
        />
        <label>gender</label>
        <select
          type="select"
          name="gender"
          value={newPatient.gender}
          onChange={handleChange}
        >
          <option>female</option>
          <option>male</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

// import React, { useState } from "react";

// export default function PatientSignup() {
//   const [name, setName] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("the user submitted the form");
//     console.log("name of the new patient is", name);
//     setSuccess(true);
//   };
//   return (
//     <div>
//       <h1>Patient signup</h1>
//       {success ? "signup form was submitted" : null}
//       <form onSubmit={handleSubmit}>
//         <label>
//           first name
//           <input
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//             type="text"
//             name="name"
//           />
//         </label>

//         <label>
//           last name
//           <input type="text" name="name" />
//         </label>

//         <label>
//           email
//           <input type="text" name="name" />
//         </label>

//         <label>
//           phone
//           <input type="text" name="name" />
//         </label>

//         <label>
//           gender
//           <input type="text" name="name" />
//         </label>

//         <label>
//           date of birth
//           <input type="text" name="name" />
//         </label>
//         <button type="submit">submit</button>
//       </form>
//       {/* <input type="submit" value="Submit" /> */}
//       {/* <h5>first name</h5>
//       <h5>last name</h5>
//       <h5>email</h5>
//       <h5>phone</h5>
//       <h5>gender</h5>
//       <h5>date of birth</h5> */}
//     </div>
//   );
// }
