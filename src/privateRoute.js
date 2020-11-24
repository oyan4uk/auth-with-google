import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./utils/auth-context";
import { ROUTES } from "./constants/routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { authUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                {
                    return authUser && authUser.accessToken ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={ROUTES.login} />
                    );
                }
            }}
        />
    );
};

export default PrivateRoute;
