import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <progress className="progress w-56"></progress>;

  if (user) return children;

  <Navigate to='/login' state={location} replace />
};

export default PrivateRoute;
