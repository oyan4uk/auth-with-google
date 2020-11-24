import React from "react";
import { useGoogleLogin } from "react-google-login";
import { CLIENT_ID } from "../../constants/auth";
import { useAuth } from "../../utils/auth-context";
import classes from "./GoogleLogin.module.scss";
import { useHistory } from "react-router";
import { ROUTES } from "../../constants/routes";

function Login() {
    const { setAuthUser } = useAuth();
    const history = useHistory();

    const onSuccess = res => {
        if (res.accessToken) {
            setAuthUser({ accessToken: res.accessToken, user: res.profileObj });
            history.push(ROUTES.profile);
        }
    };

    const onFailure = res => {
        console.info("Login failed: res:", res);
        alert("Failed to login");
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId: CLIENT_ID,
        isSignedIn: true,
        accessType: "offline",
        // responseType: 'code',
        // prompt: 'consent',
    });

    return (
        <button onClick={signIn} className={classes.button}>
            <img src="icons/google.svg" alt="google login" className="icon"></img>

            <span className="buttonText">Sign in with Google</span>
        </button>
    );
}

export default Login;
