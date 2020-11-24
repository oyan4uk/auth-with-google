import React from "react";
import { useAuth } from "../../utils/auth-context";
import { Card } from "./Card.styled";
import GoogleLogout from "../../components/GoogleLogout";
import classes from "./ProfilePage.module.scss";

export default function ProfilePage() {
    const {
        authUser: { user },
    } = useAuth();
    console.log(user);

    return (
        <div className={classes.profile}>
            <Card>
                <span>Name: {user.name}</span>
                <span>Email: {user.email}</span>
            </Card>
            <GoogleLogout />
        </div>
    );
}
