import React, { useState, useEffect } from "react";
import axios from "axios"
import {navigate} from "hookrouter";

export default function Availability(props) {
  
  const [hours, setHours] = useState([])
  const [monday, setMonday] = useState("")
  const [tuesday , setTuesday] = useState("")
  const [wednesday, setWednesday] = useState("")
  const [thursday, setThursday] = useState("")
  const [friday, setFriday] = useState("")
  const [saturday, setSaturday] = useState("")

  useEffect(() => {
    getHours()
    props.handleAvailabilityClick("nav-link-active")
    populateHours()
  }, [])

  const getHours = () => {
    axios.get("http://localhost:5000/hours")
      .then(data => setHours(data.data))
      .catch(err => console.log(err))
  }

  const populateHours = () => {
    hours.forEach(hour => {
      if(hour.day == "Monday") {
        setMonday(hour.hours)
      } else if(hour.day == "Tuesday") {
        setTuesday(hour.hours)
      } else if(hour.day == "Wednesday") {
        setWednesday(hour.hours)
      } else if(hour.day == "Thursday") {
        setThursday(hour.hours)
      } else if(hour.day == "Friday") {
        setFriday(hour.hours)
      } else if(hour.day == "Saturday") {
        setSaturday(hour.hours)
      }
    })
  }

  if(props.loggedInStatus == false) {
    return (
      <div className="availability-app">
        <div className="header-wrapper">
          <h1>Availability</h1>
        </div>
        <button onClick={() => populateHours()}>Click me</button>
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
            <p>Monday:</p>
            <input type="text" value={monday} onChange={e => setMonday(e.target.value)} />
          </div>   
  
          <div className="hours-wrapper">
            <p>Tuesday:</p>
            <input type="text" value={tuesday} onChange={e => setTuesday(e.target.value)} />
          </div>  
  
          <div className="hours-wrapper">
            <p>Wednesday:</p>
            <input type="text" value={wednesday} onChange={e => setWednesday(e.target.value)} />
          </div>  
  
          <div className="hours-wrapper">
            <p>Thursday:</p>
            <input type="text" value={thursday} onChange={e => setThursday(e.target.value)} />
          </div>  
  
          <div className="hours-wrapper">
            <p>Friday:</p>
            <input type="text" value={friday} onChange={e => setFriday(e.target.value)} />
          </div>   
  
          <div className="hours-wrapper">
            <p>Saturday:</p>
            <input type="text" value={saturday} onChange={e => setSaturday(e.target.value)} />
          </div>   
        </div>
  
        <div className="nav-contact-wrapper">
          <p id="nav-contact" onClick={() => navigate("/contact")}>Click here to contact me about an appointment or interveiw</p>
        </div>
  
      </div>
    );
  }
}