/*import React from "react";*/
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
const Navbar = (data) => {
  const verify = data.outside;

  const { isAuthenticated, logout } = useAuth();
  const logOut = async () => {
    await logout();
  };

  return (
    <div className={s.nav}>
      <div className={s.navUl}>
        <NavLink
          className={s.navLink}
          to={isAuthenticated ? "/dashboard" : "/"}
        >
          <div style={{ cursor: "pointer" }}>INICIO</div>
        </NavLink>
      </div>
      {!verify.outside === false && (
        <NavLink
          className={s.nav2}
          to={isAuthenticated ? "/" : "/signin"}
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
