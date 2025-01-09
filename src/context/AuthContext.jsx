import { createContext, useContext, useEffect, useState } from "react";
import {
  registerRequest,
  signinRequest,
  verifyToken,
  logOut,
  updateLevel,
} from "../api/auth";
import cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("*error del contexto");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const Context = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState(null); /*//////// */
  //
  const signup = async (user) => {
    // const cookie = cookies.get("token");
    //console.log(cookie);
    try {
      console.log(user);
      const res = await registerRequest(user);
      if (!res.data) {
        throw new Error("Respuesta vacía del servidor");
      }
      setUser(res.data);
      setIsAuthenticated(true);
      setLevel(res.data.level);
    } catch (err) {
      console.log(err);
      setErrors(err.response.data);
    }
  };

  //
  const signin = async (user) => {
    /* console.log("ggggggggggg");
     */
    console.log(cookies.get());
    console.log("cookies.get()");
    const token = cookies.get("token");
    console.log("Token desde cookiesss:", token);
    try {
      const res = await signinRequest(user);
      console.log(res);
      setUser(res.data);
      setIsAuthenticated(true);
      setLevel(res.data.level);
    } catch (err) {
      console.log(err);
      setErrors(err.response.data);
    }
  };
  const logout = async () => {
    const Out = await logOut();
    console.log(Out);
    setIsAuthenticated(false);
    setUser([]);
  };
  const update = async (user) => {
    const cookie = cookies.get();
    console.log(cookie);
    try {
      const newUser = await updateLevel(user);
      console.log(newUser.data);

      setUser(newUser.data);
      return newUser.data;
    } catch (err) {
      console.log(err);
      setErrors(err.response.data);
    }
  };

  useEffect(() => {
    async function checkLogin() {
      const cookie = cookies.get();
      console.log(cookie);
      console.log("ggggggggggg");
      try {
        /* if (!cookie.token) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
          return;
        }*/
        const res = await verifyToken();
        console.log("res.data");
        console.log("************//");
        console.log(res.data);
        if (!res.data) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
        setLevel(res.data.level); //
        return;
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  useEffect(() => {
    if (errors.length > 0) {
      setTimeout(() => {
        setErrors([]);
      }, 4500);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        loading,
        user,
        isAuthenticated,
        errors,
        level,
        update,
      }}
    >
      {children /* m*/}
    </AuthContext.Provider>
  );
};
