import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, signinRequest, verifyToken } from "../api/auth";
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
  const [authErrors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState(1); /*//////// */
  //
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res);
      setIsAuthenticated(true);
    } catch (err) {
      setErrors(err.response.data);
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

  useEffect(() => {
    async function checkLogin() {
      const cookie = cookies.get();
      try {
        if (!cookie.token) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
          return;
        }

        const res = await verifyToken();
        if (!res.data) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
          return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
        return;
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        loading,
        user,
        isAuthenticated,
        authErrors,
        level,
        setLevel,
      }}
    >
      {children /* m*/}
    </AuthContext.Provider>
  );
};
