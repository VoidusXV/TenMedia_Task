import styles from "../Company/CompanyViewStyles.module.scss";

interface ICompanyView {
    name?: string;
    address?: string;
    phoneNumber?: string;
    email?: string;
}
const CompanyView = ({ name, address, phoneNumber, email }: ICompanyView) => {
    return (
        <div className={styles.CompanyView_BoxContainer}>
            <b className={styles.CompanyView_BoxTitle}>Firma: {name}</b>
            <b className={styles.CompanyView_BoxDesc}>Addresse: {address}</b>
            <b className={styles.CompanyView_BoxDesc}>
                Phone Number: {phoneNumber}
            </b>
            <b className={styles.CompanyView_BoxDesc}>Email: {email}</b>
        </div>
    );
};

export default CompanyView;
