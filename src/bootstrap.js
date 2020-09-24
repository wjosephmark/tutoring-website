import React from "react";
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
          <A className="nav-link" href="/">Home</A>
          <A className="nav-link" href="/availability">Availability</A>
          <A className="nav-link" href="/contact">Contact</A>
        </div>
      </div>
      {useRoutes(routes)}
    </div>
  )
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"))
