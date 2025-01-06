import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  console.log(loading, isAuthenticated);
  if (loading) return <h1> loading...</h1>;

  if (!loading && !isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
