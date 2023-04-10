import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default PrivateRoute;
