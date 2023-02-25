import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import Form from "react-bootstrap/Form";
import ListView from "../../components/views/ListView/ListView";
import { Button } from "react-bootstrap";
import { Modells, ViewStyles } from "../../constants/Global_Interfaces";

//TODO: Add ViewStyles changer

const Dashboard = () => {
    const [getModell, setModell] = useState(0);
    return (
        <div className={styles.DashboardContainer}>
            <div className={styles.TopContainer}>
                {/* <b className={styles.TitleText}>Stellenanzeigen</b>
                <SearcherBox></SearcherBox> */}
                <Form.Select
                    value={getModell}
                    onChange={(e) => setModell(Number(e.target.value))}
                >
                    <option value={"-1"}>Choose Modell</option>
                    <option value={Modells.Job}>Job</option>
                    <option value={Modells.Company}>Company</option>
                    <option value={Modells.User}>User</option>
                </Form.Select>

                <Button
                    style={{
                        marginTop: 20,
                        width: 200,
                        backgroundColor: "#1e2334",
                        borderColor: "#6b6b6b",
                    }}
                >
                    Create selected Modell
                </Button>
            </div>
            <div className={styles.JobAd_ViewContainer}>
                {/* {getModell == ViewStyles.Undefined && <a>Select a Modell</a>}

                {getModell == ViewStyles.ListView && <ListView></ListView>} */}

                <ListView SelectedModell={getModell}></ListView>
            </div>
        </div>
    );
};

export default Dashboard;
