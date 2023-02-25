import { Modells } from "../../../constants/Global_Interfaces";

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

function getViewText(SelectedModell: Number) {
    if (SelectedModell == Modells.Job) return "Job-View";
    if (SelectedModell == Modells.Company) return "Company-View";
    if (SelectedModell == Modells.User) return "User-View";
}

export { getFilteredData, getViewText };
