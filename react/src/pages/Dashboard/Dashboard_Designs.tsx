import React from "react";
import { Button, Form } from "react-bootstrap";
import { backgroundColor } from "../../constants/Colors";
import styles from "./Dashboard.module.scss";

const SearcherBox = () => {
    return (
        <div className={styles.SearcherContainer}>
            <Form.Control placeholder="Beruf" className="me-3 w-100" />
            <Form.Control placeholder="Ort" className="me-3" />
            <Button
                style={{
                    width: 300,
                    padding: 10,
                    backgroundColor: backgroundColor,
                    borderColor: "#ffffff5c",
                }}
                className="ps-3 pe-3"
            >
                Job finden
            </Button>
        </div>
    );
};

export { SearcherBox };
