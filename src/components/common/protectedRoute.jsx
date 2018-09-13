import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../services/authService';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!auth.getCurrentUser()) return <Redirect to={{
          pathname: '/login',
          state: { from: props.location } //redirect them to the page they were at
        }}
        />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;