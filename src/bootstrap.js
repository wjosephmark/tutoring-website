import React, {useState} from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter"

import App from "./components/app";
import Availability from "./components/availability"
import Contact from "./components/contact"

import "./style/main.scss"

const routes = {
  "/": () => <App />,
  "/contact": () => <Contact />,
  "/availability": () => <Availability />
}

function Main() {
  const [home, setHome] = useState("nav-link")
  const [availability, setAvailability] = useState("nav-link")
  const [contact, setContact] = useState("nav-link")

  const handleHomeClick = () => {
    setHome("nav-link-active")
    setAvailability("nav-link")
    setContact("nav-link")
  }
  
    const handleAvailabilityClick = () => {
      setHome("nav-link")
      setAvailability("nav-link-active")
      setContact("nav-link")
    }

  const handleContactClick = () => {
    setHome("nav-link")
    setAvailability("nav-link")
    setContact("nav-link-active")
  }

  return(
    <div>
      <div className="navbar-wrapper">
        <div className="logo">
          <div className="black-text">
            <h1>Tutoring By</h1>
          </div>
          <div className="pink-text">
            <h1>Kilee</h1>
          </div>
        </div>
        <div className="navbar">
        <div className="nav-link-wrapper">
          <A className={home} onClick={() => handleHomeClick()} href="/">Home</A>
        </div>
        <div className="nav-link-wrapper">
          <A className={availability} onClick={() => handleAvailabilityClick()} href="/availability">Availability</A>
        </div>
        <div className="nav-link-wrapper">
          <A className={contact} onClick={() => handleContactClick()} href="/contact">Contact</A>
        </div>
        </div>
      </div>
      {useRoutes(routes)}
    </div>
  )
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"))
