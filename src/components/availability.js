import React, { useState, useEffect } from "react";
import axios from "axios"
import {navigate} from "hookrouter";

export default function Availability(props) {
  
  const [hours, setHours] = useState([])
  const [monday, setMonday] = useState("11 AM - 1 PM online, 5:30 PM - 8:30 PM online or in person")
  const [tuesday , setTuesday] = useState("12 PM - 3 PM online, 4:30 PM - 8 PM  online or in person")
  const [wednesday, setWednesday] = useState("11 AM - 1 PM online, 5:30 PM - 8:30 PM online or in person")
  const [thursday, setThursday] = useState("12 PM - 2:30 PM online, 7 PM - 8 PM  online or in person")
  const [friday, setFriday] = useState("5:30 PM - 8 PM  online or in person")
  const [saturday, setSaturday] = useState("12 PM - 4 PM online")
  const [sunday, setSunday] = useState("12 PM - 4 PM online")

  useEffect(() => {
    // getHours()
    props.handleAvailabilityClick("nav-link-active")
  }, [])

  // const getHours = () => {
  //   axios.get("http://localhost:5000/hours")
  //     .then(data => {
  //       setHours(data.data)
  //       populateHours(data.data)})
  //     .catch(err => console.log(err))
  // }

  // const populateHours = (arr) => {

  //   arr.forEach(hour => {
  //     // switch (hour.day){
  //     //   case "Monday":
  //     //     setModnay();
  //     //     break
  //     //   default:
  //     //     break
  //     // }
      
  //     // if(hour.day == "Monday") {
  //     //   setMonday(hour.hours)
  //     // } else if(hour.day == "Tuesday") {
  //     //   setTuesday(hour.hours)
  //     // } else if(hour.day == "Wednesday") {
  //     //   setWednesday(hour.hours)
  //     // } else if(hour.day == "Thursday") {
  //     //   setThursday(hour.hours)
  //     // } else if(hour.day == "Friday") {
  //     //   setFriday(hour.hours)
  //     // } else if(hour.day == "Saturday") {
  //     //   setSaturday(hour.hours)
  //     // }
  //   })
  // }

  // const daysArray = [{day: monday, id: "5f90b47a48514b748b280acc"}, tuesday, wednesday, thursday, friday, saturday]
  const daysArray = [{day: monday, id: "5f90b47a48514b748b280acc"}, 
    {day: tuesday, id: "5f90bf8efc588a74d296a0bb"}, 
    {day: wednesday, id: "5f90bf94fc588a74d296a0bc"}, 
    {day: thursday, id: "5f90bf9cfc588a74d296a0bd"}, 
    {day: friday, id: "5f90bfa1fc588a74d296a0be"}, 
    {day: saturday, id: "5f90bfa9fc588a74d296a0bf"}]

  const handleSubmit = (event) => {
    event.preventDefault()

    daysArray.forEach(day => {    
      axios.patch(
        `http://localhost:5000/hours/${day.id}`,
        {
            hours: day.day
        },
      )
      .then(response => {
        console.log(response)
      })
      .then(
        getHours()
      )
      .catch(error => {
        console.log("An error occured", error)
      });      
    })
  }

  if(props.loggedInStatus == false) {
    return (
      <div className="availability-app">
        <div className="header-wrapper">
          <h1>Availability</h1>
        </div>
        <div className="days-wrapper">
          <div className="hours-wrapper">
            <p className="day-wrapper">Monday:</p> 
            <p>{monday}</p>
          </div>   
  
          <div className="hours-wrapper">
            <p className="day-wrapper"> Tuesday:</p> 
            <p>{tuesday}</p>
          </div>  
  
          <div className="hours-wrapper">
            <p className="day-wrapper">Wednesday:</p> 
            <p>{wednesday}</p>
          </div>  
  
          <div className="hours-wrapper">
            <p className="day-wrapper">Thursday:</p> 
            <p>{thursday}</p>
          </div>  
  
          <div className="hours-wrapper">
            <p className="day-wrapper"> Friday:</p> 
            <p>{friday}</p>
          </div>   
  
          <div className="hours-wrapper">
            <p className="day-wrapper"> Saturday:</p> 
            <p>{saturday}</p>
          </div>

          <div className="hours-wrapper">
            <p className="day-wrapper">Sunday:</p> 
            <p>{sunday}</p>
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
        <form className="days-wrapper" onSubmit={() => handleSubmit(event)}>
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

          <div className="hours-wrapper">
            <p>Sunday:</p>
            <input type="text" value={Sunday} onChange={e => setSaturday(e.target.value)} />
          </div>   

          <div className="save-wrapper">
            <button type="submit">Save Changes</button>
          </div>
        </form>

        <div className="save-wrapper"></div>
  
        <div className="nav-contact-wrapper">
          <p id="nav-contact" onClick={() => navigate("/contact")}>Click here to contact me about an appointment or interveiw</p>
        </div>
  
      </div>
    );
  }
}