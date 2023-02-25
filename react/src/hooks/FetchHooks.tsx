import { useEffect, useState } from "react";
import api from "../backend/axios";
import { Modells } from "../constants/Global_Interfaces";

function getAPIEndpoint(Modell: Modells) {
    if (Modell == Modells.Job) return "/api/v1/jobs";
    else if (Modell == Modells.Company) return "/api/v1/companies";
    else if (Modell == Modells.User) return "/api/v1/users";

    return undefined;
}

function onFetchModell<T>(Modell: Modells): Array<T> {
    const [getData, setData] = useState<Array<T>>([]);

    const apiEndpoint = getAPIEndpoint(Modell);
    console.log(apiEndpoint);
    if (!apiEndpoint) throw "apiEndpoint is undefinded";

    useEffect(() => {
        api.get(apiEndpoint)
            .then((response) => {
                setData(response.data);
            })
            .catch((e) => {
                console.log("onFetchJobs:", e);
            });
    }, [Modell]);

    return getData;
}

export { onFetchModell };
