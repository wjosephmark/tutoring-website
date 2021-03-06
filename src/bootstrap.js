import React, {useState} from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter"

import App from "./components/app";
import Availability from "./components/availability"
import Contact from "./components/contact"
import Auth from "./components/auth"
import Account from "./components/account"

import "./style/main.scss"


function Main() {
  const [home, setHome] = useState("nav-link")
  const [availability, setAvailability] = useState("nav-link")
  const [contact, setContact] = useState("nav-link")
  const [login, setLogin] = useState("nav-link")
  const [account, setAccount] = useState("nav-link")
  const [navbarClass, setNavbarClass] = useState("navbar-wrapper")
  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState([])
  
  const routes = {
    "/": () => <App home={home} setHome={setHome} handleHomeClick={handleHomeClick} />,
    "/contact": () => <Contact handleContactClick={handleContactClick} />,
    "/availability": () => <Availability handleAvailabilityClick={handleAvailabilityClick}  loggedInStatus={loggedInStatus}/>,
    "/login": () => <Auth  handleLoginClick={handleLoginClick} setLoggedInStatus={setLoggedInStatus} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />,
    "/account": () => <Account loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus}  handleAccountClick={handleAccountClick} setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser}/>
  }
  const handleHomeClick = () => {
    setHome("nav-link-active")
    setAvailability("nav-link")
    setContact("nav-link")
    setLogin("nav-link")
    setAccount("nav-link")
  }
  
  const handleAvailabilityClick = () => {
    setHome("nav-link")
    setAvailability("nav-link-active")
    setContact("nav-link")
    setLogin("nav-link")
    setAccount("nav-link")
  }

  const handleContactClick = () => {
    setHome("nav-link")
    setAvailability("nav-link")
    setContact("nav-link-active")
    setLogin("nav-link")
    setAccount("nav-link")
  }

  const handleLoginClick = () => {
    setHome("nav-link")
    setAvailability("nav-link")
    setContact("nav-link")
    setLogin("nav-link-active")
  }

  const handleAccountClick = () => {
    setHome("nav-link")
    setAvailability("nav-link")
    setContact("nav-link")
    setLogin("nav-link")
    setAccount("nav-link-active")
  }

  if(loggedInStatus == false){
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
            {/* <div className="nav-link-wrapper">
              <A className={login} onClick={() => handleLoginClick()} href="/login">Login</A>
            </div> */}
          </div>
        </div>
        {useRoutes(routes)}
      </div>
    )
  } else if(loggedInStatus == true) {
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
            {/* <div className="nav-link-wrapper">
              <A className={account} onClick={() => handleAccountClick()} href="/account">Account</A>
            </div> */}
          </div>
        </div>
        {useRoutes(routes)}
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"))
