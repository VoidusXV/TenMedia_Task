import api from "../../../backend/axios";
import {
    getAPIControllerEndpoint,
    getAPIEndpoint,
} from "../../../hooks/FetchHooks";

async function onUpdate(
    navigate: any,
    Modell: any,
    Payload: any,
    ModellData: any
) {
    try {
        const apiEndpoint = getAPIControllerEndpoint(Modell, ModellData);

        if (!apiEndpoint) throw "apiEndpoint is undefinded";

        console.log(apiEndpoint, Payload);
        const response = await api.put(apiEndpoint, Payload);
        console.log(response.data);
        navigate("/");
    } catch (e: any) {
        alert(`Error: ${e.message}`);
        console.log("onUpdate:", e.message);
    }
}

async function onCreate(navigate: any, Modell: any, Payload: any) {
    try {
        const apiEndpoint = getAPIEndpoint(Modell);
        if (!apiEndpoint) throw "apiEndpoint is undefinded";

        console.log("apiEndpoint", apiEndpoint);
        console.log("onCreate", Payload);

        const response = await api.post(apiEndpoint, Payload);
        console.log(response.data);
        navigate("/");
    } catch (e: any) {
        alert(`Error: ${e.message}`);
        console.log("onCreate:", e.message);
    }
}

export { onUpdate, onCreate };
