import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import { Route, Redirect } from "react-router-dom";

const RestrictedAccess = ({ children, role, ...rest }) => {
    const { store, actions } = useContext(Context);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          store.logged ? children : <Redirect to="/"/>
        }
      />
    );
}

export default RestrictedAccess;