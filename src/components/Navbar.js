import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Ab=()=>{
  return(
    <Router>
      <Switch>
        <Route/>
      </Switch>
    </Router>
  );
}

const Navbar = () =>{
  const [position, navbarPosition] = useState(false);

  function scroll() {
    if (window.scrollY >= 20) {
      navbarPosition(true);
    } else {
      navbarPosition(false);
    }
  }
  window.addEventListener("scroll", scroll);
  if(false) return Ab;

    return(
      <nav className={position ? "navbar navbar-expand-sm sticky-top down" : "navbar navbar-expand-sm sticky-top"}>
        <a className="navbar-brand" href="https://www.linkedin.com/in/utkarsh-singhal-58ba3b1a6/" target="_blank" rel="noreferrer">Utkarsh Singhal</a>
        <h1>|</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link  to="/" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
          <Link  to="/skills" className="nav-link">Skills</Link>
          </li>
        </ul>
      </nav>
    );
  };



export default Navbar;