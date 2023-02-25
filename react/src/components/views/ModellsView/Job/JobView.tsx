import { IJobAd_Box } from "../../../../pages/Dashboard/Dashboard_Interfaces";
import styles from "../Job/JobViewStyles.module.scss";

const JobView = ({ Title, Description }: IJobAd_Box) => {
    return (
        <div className={styles.JobAd_BoxContainer}>
            <b className={styles.JobAd_BoxTitle}>{Title}</b>

            <b className={styles.JobAd_BoxDesc}>{Description}</b>
        </div>
    );
};

export default JobView;
