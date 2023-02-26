import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { NavTopColor } from "../../../constants/Colors";
import CustomButton from "../../CustomDesigns/CustomButton";
import styles from "../ManageView/ManageViewStyles.module.scss";
import {
    IManageDetailsContainer,
    ISubmitContainer,
} from "./ManageViewInterfaces";

const ManageDetailsContainer = ({
    Title,
    onChange,
    TextValue,
}: IManageDetailsContainer) => {
    return (
        <div className={styles.DetailsContainer}>
            <div
                style={{
                    display: "flex",
                    marginRight: 10,
                }}
            >
                <b className={styles.DetailsText}>{Title}</b>
            </div>
            <Form.Control
                defaultValue={TextValue}
                onChange={onChange}
            ></Form.Control>
        </div>
    );
};
const SubmitContainer = ({
    onCancel,
    onUpdate,
    onCreate,
    state,
}: ISubmitContainer) => {
    return (
        <div className={styles.SubmitContainer}>
            <CustomButton onClick={onCancel} Title="Cancel"></CustomButton>
            <CustomButton
                onClick={state == "edit" ? onUpdate : onCreate}
                Title={state == "edit" ? "Update" : "Create"}
            ></CustomButton>
        </div>
    );
};

const ManageJobView = ({
    onChange,
    ModellData,
}: {
    onChange: any;
    ModellData: any;
}) => {
    const [getJobData, setJobData] = useState({
        companyID: ModellData?.companyID ?? 1,
        title: ModellData?.title,
        salary: ModellData?.salary,
        description: ModellData?.description,
        location: ModellData?.location,
    });

    useEffect(() => {
        onChange && onChange(getJobData);
    }, [getJobData]);

    return (
        <div
            className={styles.ManageJobView}
            style={{ backgroundColor: NavTopColor }}
        >
            <ManageDetailsContainer
                TextValue={getJobData?.title}
                Title="Title"
                onChange={(e: any) =>
                    setJobData({ ...getJobData, title: e?.target?.value })
                }
            ></ManageDetailsContainer>
            <ManageDetailsContainer
                TextValue={getJobData?.salary}
                Title="Salary"
                onChange={(e: any) =>
                    setJobData({ ...getJobData, salary: e?.target?.value })
                }
            ></ManageDetailsContainer>
            <ManageDetailsContainer
                TextValue={getJobData?.description}
                Title="Description"
                onChange={(e: any) =>
                    setJobData({ ...getJobData, description: e?.target?.value })
                }
            ></ManageDetailsContainer>
            <ManageDetailsContainer
                TextValue={getJobData?.location}
                Title="Location"
                onChange={(e: any) =>
                    setJobData({ ...getJobData, location: e?.target?.value })
                }
            ></ManageDetailsContainer>
        </div>
    );
};

const ManageCompanyView = ({
    onChange,
    ModellData,
}: {
    onChange: any;
    ModellData: any;
}) => {
    const [getCompanyData, setCompanyData] = useState({
        name: ModellData?.name,
        address: ModellData?.address,
        phoneNumber: ModellData?.phoneNumber,
        email: ModellData?.email,
    });

    useEffect(() => {
        onChange && onChange(getCompanyData);
    }, [getCompanyData]);

    return (
        <div
            className={styles.ManageJobView}
            style={{ backgroundColor: NavTopColor }}
        >
            <ManageDetailsContainer
                TextValue={getCompanyData?.name}
                Title="Name"
                onChange={(e: any) =>
                    setCompanyData({
                        ...getCompanyData,
                        name: e?.target?.value,
                    })
                }
            ></ManageDetailsContainer>
            <ManageDetailsContainer
                TextValue={getCompanyData?.address}
                Title="Address"
                onChange={(e: any) =>
                    setCompanyData({
                        ...getCompanyData,
                        address: e?.target?.value,
                    })
                }
            ></ManageDetailsContainer>
            <ManageDetailsContainer
                TextValue={getCompanyData?.phoneNumber}
                Title="Phone Number"
                onChange={(e: any) =>
                    setCompanyData({
                        ...getCompanyData,
                        phoneNumber: e?.target?.value,
                    })
                }
            ></ManageDetailsContainer>
            <ManageDetailsContainer
                TextValue={getCompanyData?.email}
                Title="Email"
                onChange={(e: any) =>
                    setCompanyData({
                        ...getCompanyData,
                        email: e?.target?.value,
                    })
                }
            ></ManageDetailsContainer>
        </div>
    );
};

const ManageUserView = ({
    onChange,
    ModellData,
}: {
    onChange: any;
    ModellData: any;
}) => {
    const [getUserData, setUserData] = useState({
        companyID: 1,
        firstname: ModellData?.firstname,
        surname: ModellData?.surname,
        email: ModellData?.email,
        password: ModellData?.password,
    });

    useEffect(() => {
        onChange && onChange(getUserData);
    }, [getUserData]);

    return (
        <div
            className={styles.ManageJobView}
            style={{ backgroundColor: NavTopColor }}
        >
            <ManageDetailsContainer
                TextValue={getUserData?.firstname}
                Title="Firstname"
                onChange={(e: any) =>
                    setUserData({
                        ...getUserData,
                        firstname: e?.target?.value,
                    })
                }
            ></ManageDetailsContainer>
            <ManageDetailsContainer
                TextValue={getUserData?.surname}
                Title="Surname"
                onChange={(e: any) =>
                    setUserData({
                        ...getUserData,
                        surname: e?.target?.value,
                    })
                }
            ></ManageDetailsContainer>
            <ManageDetailsContainer
                TextValue={getUserData?.email}
                Title="Email"
                onChange={(e: any) =>
                    setUserData({
                        ...getUserData,
                        email: e?.target?.value,
                    })
                }
            ></ManageDetailsContainer>
            <ManageDetailsContainer
                TextValue={getUserData?.password}
                Title="Password"
                onChange={(e: any) =>
                    setUserData({
                        ...getUserData,
                        password: e?.target?.value,
                    })
                }
            ></ManageDetailsContainer>
        </div>
    );
};

export { ManageJobView, ManageCompanyView, ManageUserView, SubmitContainer };
