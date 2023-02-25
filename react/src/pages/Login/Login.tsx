import React, { useState } from "react";
import styles from "./LoginStyles.module.scss";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { NavTopColor } from "../../constants/Colors";
import axios from "axios";
import { UserData } from "../../constants/auth";
import api from "../../backend/axios";

const Login = () => {
    const navigate = useNavigate();

    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");

    const handleLogin = async (event: any) => {
        event.preventDefault();
        try {
            const payload = {
                email: getEmail,
                password: getPassword,
            };

            // UserData.isLogged = true;
            // UserData.UserData = response?.data?.user;

            // navigate("/");

            await api
                .get("/sanctum/csrf-cookie")
                .then(async () => {
                    await api.post("/login", payload);
                })
                .then((response) => {
                    console.log(response);
                });
        } catch (e: any) {
            console.log("Error:", e);
        }
    };
    return (
        <div className={styles.MainContainer}>
            <div
                className={styles.FormContainer}
                style={{ backgroundColor: NavTopColor }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                    }}
                >
                    <b className={styles.LoginText}>Login</b>
                </div>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={getEmail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            // type="password"
                            placeholder="Password"
                            value={getPassword}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3 user-select-none"
                        controlId="formBasicCheckbox"
                    >
                        <Form.Check type="checkbox" label="Show Password" />
                    </Form.Group>
                    <Button
                        type="submit"
                        className="ps-4 pe-4 br-5 rounded"
                        onClick={async (e) => await handleLogin(e)}
                    >
                        Login
                    </Button>
                </Form>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                    }}
                >
                    <>
                        <a>Don't have an account?</a>
                        <a
                            onClick={() => {
                                alert("Not yet implemented");
                            }}
                        >
                            Sign Up
                        </a>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Login;
