import React, { useState } from "react";
import styles from "./LoginStyles.module.scss";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { NavTopColor } from "../../constants/Colors";

const Login = () => {
    const navigate = useNavigate();

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
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group
                        className="mb-3 user-select-none"
                        controlId="formBasicCheckbox"
                    >
                        <Form.Check type="checkbox" label="Show Password" />
                    </Form.Group>
                    <Button type="submit" className="ps-4 pe-4 br-5 rounded">
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
                    <a>
                        <a>Don't have an account? </a>
                        <a href="/">Sign Up</a>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
