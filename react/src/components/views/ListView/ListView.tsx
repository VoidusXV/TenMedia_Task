import React from "react";
import { ICompany, IJob, Modells } from "../../../constants/Global_Interfaces";
import { onFetchModell } from "../../../hooks/FetchHooks";
import JobView from "../ModellsView/Job/JobView";
import CompanyView from "../ModellsView/Company/CompanyView";

const ListView = ({ SelectedModell }: { SelectedModell: number }) => {
    const FetchedData: Array<ICompany> = onFetchModell(1); //SelectedModell
    console.log(SelectedModell, FetchedData);
    return (
        <>
            {FetchedData.map((e, i) => (
                <CompanyView
                    name={e.name}
                    address={e.address}
                    email={e.email}
                    phoneNumber={e.phoneNumber}
                    key={i}
                ></CompanyView>
                // <JobView
                //     key={i}
                //     Title={e.title}
                //     Description={e.description}
                // ></JobView>
            ))}
        </>
    );
};

export default ListView;
