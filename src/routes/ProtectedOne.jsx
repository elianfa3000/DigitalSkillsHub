import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const ProtectedOne = () => {
  const { level } = useAuth();
  if (level != 1) {
    return <Navigate to="/classes" replace />;
  }
  return <Outlet />;
};

export default ProtectedOne;
