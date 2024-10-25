/*import React from "react";*/
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={s.nav}>
      <ul className={s.navUl}>
        <li>
          <NavLink to="/homepage">INICIO</NavLink>
        </li>
        <li>
          <NavLink to="/signup">REGISTRO</NavLink>
        </li>
        <li>
          <NavLink to="signin">INICIAR SESIÓN</NavLink>
        </li>
      </ul>
      <div className={s.nav2}>
        <a className={s.register}>....</a>
      </div>
    </div>
  );
};

export default Navbar;
