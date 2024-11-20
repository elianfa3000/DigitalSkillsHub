/*import React from "react";*/
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={s.nav}>
      <ul className={s.navUl}>
        <NavLink className={s.navLink} to="/dashboard">
          <li>INICIO</li>
        </NavLink>

        <NavLink className={s.navLink} to="/dashboard">
          <li>RECURSOS</li>
        </NavLink>
      </ul>
      <NavLink className={s.nav2} to="/homepage">
        <div className={s.register}>SALIR</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
