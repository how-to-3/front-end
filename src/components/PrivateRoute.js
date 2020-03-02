import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route 
        {...rest}
        render={props => 
            localStorage.getItem("token") ? (
                console.log("Private Route Accepted-> Rendered PrivateRoute Component"),
                <Component {...props} />
            ):(
                console.log("Private Route Denied-> Redirected to '/'"),
                <Redirect to="/" />
            )
        }
    />
)

export default PrivateRoute;