import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styles from "../ManageView/ManageViewStyles.module.scss";
import { getViewText } from "../DetailsView/DetailsView_Function";
import { Modells } from "../../../constants/Global_Interfaces";
import { onCreate, onUpdate } from "./ManageView_Functions";
import {
    ManageCompanyView,
    ManageJobView,
    ManageUserView,
    SubmitContainer,
} from "./ManageView_Designs";

const ManageView = () => {
    const { state } = useLocation();
    const ModellData = state?.ModellData;

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [getPayload, setPayload] = useState({});

    const API_State = searchParams.get("state");
    const SelectedModell = Number(searchParams.get("modell"));
    const ViewText = getViewText(SelectedModell);

    console.log(SelectedModell);
    return (
        <div className={styles.ManageViewContainer}>
            <a style={{ color: "white", fontSize: 25, marginTop: 10 }}>
                {ViewText}
            </a>
            {SelectedModell == Modells.Job && (
                <ManageJobView
                    ModellData={ModellData}
                    onChange={(e: any) => setPayload(e)}
                ></ManageJobView>
            )}

            {SelectedModell == Modells.Company && (
                <ManageCompanyView
                    ModellData={ModellData}
                    onChange={(e: any) => setPayload(e)}
                ></ManageCompanyView>
            )}

            {SelectedModell == Modells.User && (
                <ManageUserView
                    ModellData={ModellData}
                    onChange={(e: any) => setPayload(e)}
                ></ManageUserView>
            )}

            <SubmitContainer
                onCancel={() => navigate("../")}
                state={API_State}
                onCreate={async () =>
                    await onCreate(navigate, SelectedModell, getPayload)
                }
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
