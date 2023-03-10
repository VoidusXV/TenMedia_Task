import { useEffect, useState } from "react";
import api from "../backend/axios";
import { Modells } from "../constants/Global_Interfaces";

function getAPIEndpoint(Modell: Modells) {
    if (Modell == Modells.Job) return "/api/v1/jobs";
    else if (Modell == Modells.Company) return "/api/v1/companies";
    else if (Modell == Modells.User) return "/api/v1/users";

    return undefined;
}

function getControllerEndpoint(Modell: Number, ModellData: any) {
    if (Modell == Modells.Job) return ModellData.jobID;
    if (Modell == Modells.Company) return ModellData.companyID;
    if (Modell == Modells.User) return ModellData.userID;
}

function getAPIControllerEndpoint(Modell: any, ModellData: any) {
    return `${getAPIEndpoint(Modell)}/${getControllerEndpoint(
        Modell,
        ModellData
    )}`;
}

function onFetchModell<T>(
    Modell: Modells,
    onLoading?: any,
    onLoaded?: any
): Array<T> {
    const [getData, setData] = useState<Array<T>>([]);

    const apiEndpoint = getAPIEndpoint(Modell);
    if (!apiEndpoint) throw "apiEndpoint is undefinded";

    useEffect(() => {
        onLoading && onLoading();
        api.get(apiEndpoint)
            .then((response) => {
                setData(response.data);
            })
            .catch((e) => {
                console.log("onFetchJobs:", e);
            })
            .finally(() => {
                onLoaded && onLoaded();
            });
    }, [Modell]);

    return getData;
}

export {
    onFetchModell,
    getAPIEndpoint,
    getControllerEndpoint,
    getAPIControllerEndpoint,
};
