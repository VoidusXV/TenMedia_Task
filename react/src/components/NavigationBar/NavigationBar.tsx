import React, { useContext, useEffect, useState } from "react";
import styles from "./NavigationBar.module.scss";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext, IUser } from "../../constants/auth";
import { AiFillEdit } from "react-icons/Ai";
import { isLogged } from "../../pages/Login/Login_Functions";

const NavigationBar = () => {
    const navigate = useNavigate();
    const UserData: IUser = useContext(AuthContext);

    return (
        <Navbar variant="dark" style={{ backgroundColor: "#141722" }}>
            <Container>
                <Navbar.Brand href="/">TenMedia Task</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {!UserData.isLoggedIn ? (
                        <Button
                            onClick={() => navigate("/login")}
                            style={{
                                paddingLeft: 20,
                                paddingRight: 20,
                                borderRadius: 30,
                                backgroundColor: "#191d2b",
                                borderColor: "#ffffff5c",
                            }}
                        >
                            Anmelden
                        </Button>
                    ) : (
                        <Navbar.Text>
                            Signed in as:
                            <a
                                onClick={() => navigate("/")}
                                style={{
                                    marginLeft: 10,
                                    color: "#5087f6",
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                            >
                                {UserData.UserData?.surname}
                            </a>
                        </Navbar.Text>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
