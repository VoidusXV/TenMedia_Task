import { useState, useEffect } from "react";
import api from "../../../../backend/axios";
import styles from "../User/UserViewStyles.module.scss";

interface IUserView {
    companyID?: Number | undefined;
    firstname?: string;
    surname?: string;
    email?: string;
    created_at?: Date;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const UserView = ({
    companyID,
    firstname,
    surname,
    email,
    created_at,
    onClick,
}: IUserView) => {
    console.log(new Date("2023-02-25T01:26:34.000000Z").toUTCString());

    const [getCompanyName, setCompanyName] = useState("");
    useEffect(() => {
        console.log(companyID);
        api.get(`http://localhost:8000/api/v1/companies/${companyID}`).then(
            (resp) => setCompanyName(resp?.data?.name)
        );
    }, []);

    return (
        <div onClick={onClick} className={styles.UserView_BoxContainer}>
            <b className={styles.UserView_BoxTitle}>
                Employee of: {getCompanyName}
            </b>
            <b className={styles.UserView_BoxDesc}>Firstname: {firstname}</b>
            <b className={styles.UserView_BoxDesc}>surname: {surname}</b>
            <b className={styles.UserView_BoxDesc}>Email: {email}</b>
            <b className={styles.UserView_BoxDesc}>
                Created at:{" "}
                {created_at ? new Date(created_at).toUTCString() : ""}
            </b>
        </div>
    );
};

export default UserView;
