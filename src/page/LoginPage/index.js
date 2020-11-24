import React, { useState } from "react";
import GoogleLogin from "../../components/GoogleLogin";
import { Card, Form, Input, Button, Error } from "./LoginPage.styled";
import classes from "./LoginPage.module.scss";

export default function LoginPage() {
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {};

    return (
        <div className={classes.login}>
            {/*<Card>*/}
            {/*    <Form>*/}
            {/*        <Input*/}
            {/*            type="username"*/}
            {/*            value={userName}*/}
            {/*            onChange={e => {*/}
            {/*                setUserName(e.target.value);*/}
            {/*            }}*/}
            {/*            placeholder="email"*/}
            {/*        />*/}
            {/*        <Input*/}
            {/*            type="password"*/}
            {/*            value={password}*/}
            {/*            onChange={e => {*/}
            {/*                setPassword(e.target.value);*/}
            {/*            }}*/}
            {/*            placeholder="password"*/}
            {/*        />*/}
            {/*        <Button onClick={handleSubmit}>Sign In</Button>*/}
            {/*    </Form>*/}
            {/*    {isError && (*/}
            {/*        <Error>The username or password provided were incorrect!</Error>*/}
            {/*    )}*/}
            {/*</Card>*/}
            <GoogleLogin />
        </div>
    );
}
