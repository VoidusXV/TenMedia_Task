import React, { useState } from "react";
import {
    ICompany,
    IJob,
    IModells,
    IUserData,
    Modells,
} from "../../../constants/Global_Interfaces";
import { onFetchModell } from "../../../hooks/FetchHooks";
import JobView from "../ModellsView/Job/JobView";
import CompanyView from "../ModellsView/Company/CompanyView";
import UserView from "../ModellsView/User/UserView";

const SelectedListModellView = ({ FetchedData, SelectedModell }: any) => {
    return (
        <>
            {FetchedData.map((e: any, i: any) => (
                <>
                    {SelectedModell == Modells.User && (
                        <UserView
                            key={i}
                            companyID={e.companyID}
                            surname={e.surname}
                            firstname={e.firstname}
                            email={e.email}
                            created_at={e.created_at}
                        ></UserView>
                    )}
                    {SelectedModell == Modells.Company && (
                        <CompanyView
                            key={i}
                            name={e.name}
                            address={e.address}
                            email={e.email}
                            phoneNumber={e.phoneNumber}
                        ></CompanyView>
                    )}
                    {SelectedModell == Modells.Job && (
                        <JobView
                            key={i}
                            Title={e.title}
                            Description={e.description}
                        ></JobView>
                    )}
                </>
            ))}
        </>
    );
};

const ListView = ({ SelectedModell }: { SelectedModell: number }) => {
    const [isLoading, setLoading] = useState(true);
    const FetchedData: any = onFetchModell(
        SelectedModell,
        () => setLoading(true),
        () => setLoading(false)
    );
    return (
        <>
            {!isLoading && (
                <SelectedListModellView
                    FetchedData={FetchedData}
                    SelectedModell={SelectedModell}
                ></SelectedListModellView>
            )}
        </>
    );
};

export default ListView;
