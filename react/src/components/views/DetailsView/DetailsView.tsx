import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { NavTopColor } from "../../../constants/Colors";
import styles from "../DetailsView/DetailsViewStyles.module.scss";

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

function getFilteredData(ModellData: Array<any>) {
    let data: Array<any> = [];
    const keys = Object.keys(ModellData);
    for (let index = 0; index < keys.length; index++) {
        const key = keys[index].toLowerCase();
        const value = Object.values(ModellData)[index];

        if (!key.includes("id") && !key.includes("token"))
            data.push({ key, value });
    }

    return data;
}

const DetailsView = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const ModellData: Array<any> = state?.ModellData;
    const FilteredData = getFilteredData(ModellData);

    return (
        <div className={styles.DetailsViewContainer}>
            <div className={styles.EditContainer}>
                <Button
                    onClick={() => navigate("/manage-view")}
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
