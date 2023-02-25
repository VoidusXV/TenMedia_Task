import styles from "../Job/JobViewStyles.module.scss";

interface IJobAd_Box {
    Title?: any;
    Description?: any;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const JobView = ({ Title, Description, onClick }: IJobAd_Box) => {
    return (
        <div onClick={onClick} className={styles.JobAd_BoxContainer}>
            <b className={styles.JobAd_BoxTitle}>{Title}</b>
            <b className={styles.JobAd_BoxDesc}>{Description}</b>
        </div>
    );
};

export default JobView;
