import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import classes from "./Header.scss";

export function Header() {
    return (
        <nav className={classes.menu}>
            <ul className={classes.menuList}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.login}>Login</Link>
                </li>
                <li>
                    <Link to={ROUTES.profile}>Profile</Link>
                </li>
            </ul>
        </nav>
    );
}
