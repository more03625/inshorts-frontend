import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import { isAuthenticated } from '.';


const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => isAuthenticated() && isAuthenticated().user.role === 1? (
        <Component {...props} />
    ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    )} />
)

export default AdminRoute