import { createContext, useContext, useState } from "react";

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
  const [user, setUser] = useState("111");

  const saluda = () => {
    if (user) {
      setUser("hooooolaaaaaaaaaa432432");
      console.log(user);
      return;
    }
  };

  return (
    <AuthContext.Provider value={{ saluda, user, setUser }}>
      {children /* m*/}
    </AuthContext.Provider>
  );
};
