import React from "react";
import styles from "./NavigationBar.module.scss";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <Navbar variant="dark" style={{ backgroundColor: "#141722" }}>
            <Container>
                <Navbar.Brand href="/">TenMedia Task</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
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

                    {/* <Navbar.Text>
                        Signed in as: <a href="login">Mark Otto</a>
                    </Navbar.Text> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
