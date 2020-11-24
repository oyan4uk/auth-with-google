import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./utils/auth-context";
import MainPage from "./page/MainPage";
import { ROUTES } from "./constants/routes";
import LoginPage from "./page/LoginPage";
import PrivateRoute from "./privateRoute";
import ProfilePage from "./page/ProfilePage";
import "./App.scss";
import { Header } from "./components/Header";

function App() {
    const existingTokens = JSON.parse(localStorage.getItem("user"));
    const [authUser, setAuthUser] = useState(existingTokens);

    const setUser = data => {
        if (data) {
            localStorage.setItem("user", JSON.stringify(data));
            setAuthUser(data);
        } else {
            setAuthUser(null);
            localStorage.removeItem("user");
        }
    };

    return (
        <AuthProvider value={{ authUser, setAuthUser: setUser }}>
            <Router>
                <Header />
                <div className="App">
                    <Switch>
                        <PrivateRoute exact path="/" component={MainPage} />
                        <Route path={ROUTES.login} component={LoginPage} />
                        <PrivateRoute path={ROUTES.profile} component={ProfilePage} />
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
