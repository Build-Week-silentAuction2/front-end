import React from "react";
import {Route, Redirect} from "react-router-dom";

function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route {...rest}
        render={props => {
            let userInfo = JSON.parse(localStorage.getItem("user"));
            if (userInfo) {
                if (userInfo.role === "buyer" && rest.path === "/seller-dashboard"
                ) {
                    return <Redirect to="/buyer-dashboard" />
                }
                if (
                    userInfo.role === "seller" &&
                    rest.path === "buyer-dashboard"
                ) {
                    return <Redirect to="seller-dashboard" />
                }
            }

            if (localStorage.getItem("token")) {
                return <Component {...props} />;
            } else {
                return <Redirect to="/"
            }
        }}
        />
    )
}

export default PrivateRoute;