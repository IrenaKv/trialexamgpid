import React from "react";

export default function Contact(props) {
  let dateTime = new Date(); // to check what console shows, --> shows full time and date
  console.log(dateTime);
  let hours = dateTime.getHours(); // console log again to get only hours
  console.log(hours);

  let status;
  if (hours >= 8 && hours < 17) {
    status = "open";
  } else {
    status = "closed";
  }

  return (
    <div>
      <h5>We are: {status}</h5>
      <h5>To make an appointment </h5>
      <h5> call: {props.phonenumber}</h5>
    </div>
  );
}
