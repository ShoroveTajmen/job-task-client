import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  if (!user?.email) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default  PrivateRoute;
