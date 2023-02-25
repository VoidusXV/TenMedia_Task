import React, { useState } from "react";
import { JobAd_Box, SearcherBox } from "./Dashboard_Designs";
import styles from "./Dashboard.module.scss";
import Form from "react-bootstrap/Form";
import ListView from "../../components/views/ListView/ListView";
import { Button } from "react-bootstrap";
import { backgroundColor } from "../../components/constants/Colors";

enum ViewStyles {
    Undefined,
    ListView,
    Details,
    CreateEditView,
}

const Dashboard = () => {
    const [getModell, setModell] = useState("0");
    return (
        <div className={styles.DashboardContainer}>
            <div className={styles.TopContainer}>
                {/* <b className={styles.TitleText}>Stellenanzeigen</b>
                <SearcherBox></SearcherBox> */}
                <Form.Select
                    value={getModell}
                    onChange={(e) => setModell(e.target.value)}
                >
                    <option>Choose Modell</option>
                    <option value="1">Job</option>
                    <option value="2">Company</option>
                    <option value="3">User</option>
                </Form.Select>

                <Button
                    style={{
                        marginTop: 20,
                        width: 200,
                        backgroundColor: "#1e2334",
                        borderColor: "#6b6b6b",
                    }}
                >
                    Create selected Model
                </Button>
            </div>
            <div className={styles.JobAd_ViewContainer}>
                {getModell == "1" && <ListView></ListView>}
            </div>
        </div>
    );
};

export default Dashboard;
