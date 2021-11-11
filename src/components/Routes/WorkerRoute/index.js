import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const WorkerRoute = ({ component: Component, ...rest }) => {
  const { username } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        username ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default WorkerRoute;
