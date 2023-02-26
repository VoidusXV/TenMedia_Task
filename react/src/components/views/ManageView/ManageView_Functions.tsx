import api from "../../../backend/axios";
import { Modells } from "../../../constants/Global_Interfaces";
import { getAPIEndpoint } from "../../../hooks/FetchHooks";

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

export { onUpdate };
