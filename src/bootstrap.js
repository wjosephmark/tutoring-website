import React, {useState} from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter"

import App from "./components/app";
import Availability from "./components/availability"
import Contact from "./components/contact"
import Auth from "./components/auth"

import "./style/main.scss"


function Main() {
  const [home, setHome] = useState("nav-link")
  const [availability, setAvailability] = useState("nav-link")
  const [contact, setContact] = useState("nav-link")
  const [navbarClass, setNavbarClass] = useState("navbar-wrapper")
  const [loggedInStatus, setLoggedInStatus] = useState(false)
  
  const routes = {
    "/": () => <App handleHomeClick={handleHomeClick} handlePageLoad={handlePageLoad}/>,
    "/contact": () => <Contact handleContactClick={handleContactClick} handlePageLoad={handlePageLoad}/>,
    "/availability": () => <Availability availability={availability} setAvailability={setAvailability} handlePageLoad={handlePageLoad} loggedInStatus={loggedInStatus}/>,
    "/login": () => <Auth  loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus} />
  }
  const handleHomeClick = () => {
    setHome("nav-link-active")
    setAvailability("nav-link")
    setContact("nav-link")
    console.log(home, "from home" )
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

  const handlePageLoad = () => {
    if(home == "nav-link-active") {
      setNavbarClass("inactive")
    } else {
      setNavbarClass("navbar-wrapper")
    }
  }

  return(
    <div>
      <div className={navbarClass}>
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
