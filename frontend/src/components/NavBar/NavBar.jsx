import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const sideNav = document.querySelector(".sideNav");
  const main = document.querySelector(".main");
  const openNav = document.querySelector(".navOpen");
  const closeNav = document.querySelector(".navClose");

  const closeSidebar = function () {
    sideNav.style.width = "0";
    main.marginLeft = "0";
  }

  return (
      <ul>
        <button className="navClose" onClick={() => closeSidebar()}>x</button>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Home</b>
          </Link>
        </li>
        <li>
          <button onClick={() => navigate("/exercise_library")}>Exercise Library</button>
        </li>
        <li>
          <button onClick={() => navigate("/video_library")}>Video Library</button>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
  );
};

export default Navbar;
