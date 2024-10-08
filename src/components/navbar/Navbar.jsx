/*import React from "react";*/
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="navUl">
        <li>
          <NavLink to="/homepage">INICIO</NavLink>
        </li>
        <li>
          <NavLink to="/">REGISTRO</NavLink>
        </li>
        <li>
          <NavLink>INICIAR SESIÓN</NavLink>
        </li>
      </ul>
      <div className={"nav2"}>
        <a className={"register"}>REGISTRARCE</a>
      </div>
    </div>
  );
};

export default Navbar;
