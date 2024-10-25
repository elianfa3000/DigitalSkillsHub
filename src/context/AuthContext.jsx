import { createContext, useContext, useState } from "react";
import { registerRequest, signinRequest } from "../api/auth";

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
  const [authErrors, setErrors] = useState([]);
  //
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res);
      setIsAuthenticated(true);
    } catch (err) {
      //setErrors(err.response.data);
      console.log(err);
    }
  };
  //
  const signin = async (user) => {
    try {
      const res = await signinRequest(user);
      setUser(res);
      setIsAuthenticated(true);
    } catch (err) {
      console.log(err);
      setErrors(err.response.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signup, signin, user, isAuthenticated, authErrors }}
    >
      {children /* m*/}
    </AuthContext.Provider>
  );
};
