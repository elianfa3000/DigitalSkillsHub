import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const ProtectedOne = () => {
  const { level } = useAuth();
  if (level >= 2) {
    return <Outlet />;
  }
  return <Navigate to="/classes" replace />;
};

export default ProtectedOne;
