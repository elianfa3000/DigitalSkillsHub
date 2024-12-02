/*import React from "react";*/
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
const Navbar = (data) => {
  const verify = data.outside;

  const { isAuthenticated, logout } = useAuth();
  const logOut = () => {
    logout();
  };

  return (
    <div className={s.nav}>
      <ul className={s.navUl}>
        <NavLink
          className={s.navLink}
          to={isAuthenticated ? "/dashboard" : "/homepage"}
        >
          <li>INICIO</li>
        </NavLink>
      </ul>
      {!verify && (
        <NavLink
          className={s.nav2}
          to={isAuthenticated ? "/homepage" : "/signin"}
          onClick={logOut}
        >
          <div className={s.register}>
            {isAuthenticated ? "SALIR" : "INGRESAR"}
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
