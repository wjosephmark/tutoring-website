import React, { useState } from "react";
import {navigate} from "hookrouter";

export default function Availability(props) {
  
  const [monday, setMonday] = useState("3:30 p.m. - 7 p.m.")
  const [tuesday , setTuesday] = useState("12 p.m. - 7 p.m.")
  const [wednesday, setWednesday] = useState("3:30 p.m. - 7 p.m.")
  const [thursday, setThursday] = useState("12 p.m. - 7 p.m.")
  const [friday, setFriday] = useState("12 p.m. - 6 p.m.")
  const [saturday, setSaturday] = useState("12 p.m. - 5 p.m.")

  if(props.loggedInStatus == false) {
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
          <p id="nav-contact" onClick={() => navigate("/contact")}>Click here to contact me about an appointment or interveiw</p>
        </div>
  
      </div>
    );
  } else if(props.loggedInStatus == true) {
    return (
      <div className="availability-app">
        <div className="header-wrapper">
          <h1>Availability</h1>
        </div>
        <div className="days-wrapper">
          <div className="hours-wrapper">
            <p>Monday: {monday}</p>
            <input type="text" placeholder="Edit Monday hours" onChange={e => setMonday(e.target.value)} />
          </div>   
  
          <div className="hours-wrapper">
            <p>Tuesday: {tuesday}</p>
            <input type="text" placeholder="Edit Tuesday hours" onChange={e => setTuesday(e.target.value)} />
          </div>  
  
          <div className="hours-wrapper">
            <p>Wednesday: {wednesday}</p>
            <input type="text" placeholder="Edit Wednesday hours" onChange={e => setWednesday(e.target.value)} />
          </div>  
  
          <div className="hours-wrapper">
            <p>Thursday: {thursday}</p>
            <input type="text" placeholder="Edit Thursday hours" onChange={e => setThursday(e.target.value)} />
          </div>  
  
          <div className="hours-wrapper">
            <p>Friday: {friday}</p>
            <input type="text" placeholder="Edit Friday hours" onChange={e => setFriday(e.target.value)} />
          </div>   
  
          <div className="hours-wrapper">
            <p>Saturday: {saturday}</p>
            <input type="text" placeholder="Edit Saturday hours" onChange={e => setSaturday(e.target.value)} />
          </div>   
        </div>
  
        <div className="nav-contact-wrapper">
          <p id="nav-contact" onClick={() => navigate("/contact")}>Click here to contact me about an appointment or interveiw</p>
        </div>
  
      </div>
    );
  }
}