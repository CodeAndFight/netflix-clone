import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import logo from "../assets/logo-vector.png";
import avatar from "../assets/netflix-avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav-contents">
        <img className="netflix_logo" src={logo} alt="Netflix big logo" />

        <img
          className="netflix_avatar"
          src={avatar}
          alt="Netflix Avatar Red "
        />
      </div>
    </div>
  );
}

export default Nav;
