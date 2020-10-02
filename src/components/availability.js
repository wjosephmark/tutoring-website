import React, { useState } from "react";

export default function Availability() {
  
  const [monday, setMonday] = useState("9 a.m. - 5 p.m.")
  const [tuesday , setTuesday] = useState("9 a.m. - 5 p.m.")
  const [wednesday, setWednesday] = useState("9 a.m. - 5 p.m.")
  const [thursday, setThursday] = useState("9 a.m. - 5 p.m.")
  const [friday, setFriday] = useState("9 a.m. - 5 p.m.")
  const [saturday, setSaturday] = useState("9 a.m. - 5 p.m.")

  return (
    <div className="availability-app">
      <div className="header-wrapper">
        <h1>Availability</h1>
      </div>
      <div className="days-wrapper">
        <div className="hours-wrapper">
          <p>Monday: {monday}</p>
        </div>   

        <div className="hours-wrapper">
          <p>Tuesday: {tuesday}</p>
        </div>  

        <div className="hours-wrapper">
          <p>Wednesday: {wednesday}</p>
        </div>  

        <div className="hours-wrapper">
          <p>Thursday: {thursday}</p>
        </div>  

        <div className="hours-wrapper">
          <p>Friday: {friday}</p>
        </div>   

        <div className="hours-wrapper">
          <p>Saturday: {saturday}</p>
        </div>   
      </div>

      <div className="nav-contact-wrapper">
        <p id="nav-contact">Click here to contact me about an appointment or interveiw.</p>
      </div>

    </div>
  );
}