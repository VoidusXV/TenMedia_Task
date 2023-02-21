import React from "react";
import { JobAd_Box, SearcherBox } from "./Dashboard_Designs";
import styles from "./Dashboard.module.scss";
import Container from "react-bootstrap/Container";

const Dashboard = () => {
    return (
        <div className={styles.DashboardContainer}>
            <div className={styles.TopContainer}>
                <b className={styles.TitleText}>Stellenanzeigen</b>
                <SearcherBox></SearcherBox>
            </div>

            <div className={styles.JobAd_ListContainer}>
                <JobAd_Box></JobAd_Box>
                <JobAd_Box></JobAd_Box>
            </div>
        </div>
    );
};

export default Dashboard;
