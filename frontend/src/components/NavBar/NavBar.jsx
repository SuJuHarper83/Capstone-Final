import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = ({setShowNavBar}) => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();


  return (
    <div className="navBar-background">
    <div className="navBar">
      <button onClick={() => setShowNavBar(false)}>X</button>
      <CSSTransition
      in ={setShowNavBar}
      timeout={400}
      className="menu-transition"
      unmountOnExit
      >
    <ul>
      <li className="brand">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <b>Home</b>
        </Link>
      </li>
      <br />
      <li>
        <button onClick={() => navigate("/exercise_library")}>
          Exercise Library
        </button>
      </li>
      <br />
      <li>
        <button onClick={() => navigate("/video_library")}>
          Video Library
        </button>
      </li>
      <br />
      <li>
        {user ? (
          <button onClick={logoutUser}>Logout</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </li>
    </ul>
    </CSSTransition>
    </div>
    </div>
  );
};

export default Navbar;
