import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { NavTopColor } from "../../../constants/Colors";
import styles from "../DetailsView/DetailsViewStyles.module.scss";
import { getFilteredData, getViewText } from "./DetailsView_Function";

interface IDetailsContainer {
    Title?: string;
    Content?: string;
}
const DetailsContainer = ({ Title, Content }: IDetailsContainer) => {
    return (
        <div className={styles.DetailsContainer}>
            <b className={styles.DetailsText} style={{ fontWeight: 500 }}>
                {Title}:
            </b>
            <b className={styles.DetailsText} style={{ marginLeft: 20 }}>
                {Content}
            </b>
        </div>
    );
};

const DetailsView = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const SelectedModell: Number = state?.SelectedModell;

    const ModellData: Array<any> = state?.ModellData;
    const FilteredData = getFilteredData(ModellData);

    const ViewText = getViewText(SelectedModell);
    return (
        <div className={styles.DetailsViewContainer}>
            <a style={{ color: "white", fontSize: 25, marginTop: 10 }}>
                {ViewText}
            </a>
            <div className={styles.EditContainer}>
                <Button
                    onClick={() => navigate("/manage-view?state=edit")}
                    style={{
                        backgroundColor: NavTopColor,
                        borderColor: "#ffffff40",
                    }}
                >
                    Edit
                </Button>
            </div>
            <div
                className={styles.JobDetailsViewContainer}
                style={{ backgroundColor: NavTopColor }}
            >
                {FilteredData?.map((e, i) => (
                    <DetailsContainer
                        key={i}
                        Title={e?.key?.toUpperCase()}
                        Content={e.value}
                    ></DetailsContainer>
                ))}
            </div>
        </div>
    );
};

export default DetailsView;
