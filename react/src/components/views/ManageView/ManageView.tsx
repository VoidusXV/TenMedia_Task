import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styles from "../ManageView/ManageViewStyles.module.scss";
import api from "../../../backend/axios";
import { Button, Form } from "react-bootstrap";
import { NavTopColor } from "../../../constants/Colors";
import { getViewText } from "../DetailsView/DetailsView_Function";
import CustomButton from "../../CustomDesigns/CustomButton";
import { ISubmitContainer } from "./ManageViewInterfaces";
import { getAPIEndpoint } from "../../../hooks/FetchHooks";
import { Modells } from "../../../constants/Global_Interfaces";

interface IManageDetailsContainer {
    Title?: string;
    onChange?: any;
    TextValue?: string;
}
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

const SubmitContainer = ({ onCancel, onUpdate }: ISubmitContainer) => {
    return (
        <div className={styles.SubmitContainer}>
            <CustomButton onClick={onCancel} Title="Cancel"></CustomButton>
            <CustomButton onClick={onUpdate} Title="Update"></CustomButton>
        </div>
    );
};

function onCreate() {
    const Payload = {
        title: "Developer",
        salary: 500,
        description: "Test",
        location: "Berlin",
    };

    useEffect(() => {
        api.post("/api/v1/jobs", Payload).then((e) => {
            console.log(e);
        });
    }, []);
}

function getUpdateEndpoint(Modell: Number, ModellData: any) {
    if (Modell == Modells.Job) return ModellData.jobID;
    if (Modell == Modells.Company) return ModellData.companyID;
    if (Modell == Modells.User) return ModellData.userID;
}

async function onUpdate(
    navigate: any,
    Modell: any,
    Payload: any,
    ModellData: any
) {
    try {
        const apiEndpoint = `${getAPIEndpoint(Modell)}/${getUpdateEndpoint(
            Modell,
            ModellData
        )}`;

        if (!apiEndpoint) throw "apiEndpoint is undefinded";

        console.log(apiEndpoint, Payload);
        const response = await api.put(apiEndpoint, Payload);
        console.log(response.data);
        navigate("/");
    } catch (e: any) {
        console.log("onUpdate:", e.message);
    }
}

const ManageJobView = ({
    onChange,
    ModellData,
}: {
    onChange: any;
    ModellData: any;
}) => {
    const [getJobData, setJobData] = useState({
        companyID: ModellData?.companyID,
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

const ManageView = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const SelectedModell = Number(searchParams.get("?modell"));
    const ViewText = getViewText(SelectedModell);
    const ModellData = state?.ModellData;

    const [getPayload, setPayload] = useState({});

    console.log();
    // console.log(getPayload);
    return (
        <div className={styles.ManageViewContainer}>
            <a style={{ color: "white", fontSize: 25, marginTop: 10 }}>
                {ViewText}
            </a>
            <ManageJobView
                ModellData={ModellData}
                onChange={(e: any) => setPayload(e)}
            ></ManageJobView>
            <SubmitContainer
                onCancel={() => navigate("../")}
                onUpdate={async () =>
                    await onUpdate(
                        navigate,
                        SelectedModell,
                        getPayload,
                        ModellData
                    )
                }
            ></SubmitContainer>
        </div>
    );
};

export default ManageView;
