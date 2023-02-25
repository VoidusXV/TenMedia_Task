import React from "react";
import { JobAd_Box, SearcherBox } from "./Dashboard_Designs";
import styles from "./Dashboard.module.scss";
import Form from "react-bootstrap/Form";

const Dashboard = () => {
    return (
        <div className={styles.DashboardContainer}>
            <div className={styles.TopContainer}>
                {/* <b className={styles.TitleText}>Stellenanzeigen</b>
                <SearcherBox></SearcherBox> */}
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                );
            </div>

            <div className={styles.JobAd_ListContainer}>
                <JobAd_Box></JobAd_Box>
                <JobAd_Box></JobAd_Box>
            </div>
        </div>
    );
};

export default Dashboard;
