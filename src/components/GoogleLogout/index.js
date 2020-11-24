import React from "react";
import { useGoogleLogout } from "react-google-login";
import { CLIENT_ID } from "../../constants/auth";
import { useHistory } from "react-router";
import { useAuth } from "../../utils/auth-context";
import classes from "./GoogleLogout.module.scss";

function LogoutHooks() {
    const { setAuthUser } = useAuth();

    const onLogoutSuccess = () => {
        setAuthUser();
    };

    const onFailure = () => {
        console.log("Handle failure cases");
    };

    const { signOut } = useGoogleLogout({
        clientId: CLIENT_ID,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <button onClick={signOut} className={classes.button}>
            <img src="icons/google.svg" alt="google login" className="icon"></img>

            <span className="buttonText">Sign out</span>
        </button>
    );
}

export default LogoutHooks;
