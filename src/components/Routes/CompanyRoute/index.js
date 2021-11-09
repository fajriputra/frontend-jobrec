import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyRoute = ({ component: Component, ...rest }) => {
  const { id } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) => (id ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default CompanyRoute;
