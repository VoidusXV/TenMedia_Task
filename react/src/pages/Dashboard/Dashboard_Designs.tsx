import React from "react";
import { Button, Form } from "react-bootstrap";
import { backgroundColor } from "../../constants/Colors";
import styles from "./Dashboard.module.scss";
import { IJobAd_Box } from "./Dashboard_Interfaces";

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

const JobAd_Box = ({ Title }: IJobAd_Box) => {
    return (
        <div className={styles.JobAd_BoxContainer}>
            <b className={styles.JobAd_BoxTitle}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
            </b>

            <b className={styles.JobAd_BoxDesc}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam
            </b>
        </div>
    );
};
export { JobAd_Box, SearcherBox };
