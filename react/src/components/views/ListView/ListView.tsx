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
import { useNavigate } from "react-router-dom";

interface ISelectedListModellView {
    FetchedData: Array<any>;
    SelectedModell: number;
    onClick?: any;
}

const SelectedListModellView = ({
    FetchedData,
    SelectedModell,
    onClick,
}: ISelectedListModellView) => {
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
                            onClick={(event) => onClick && onClick(event, e)}
                        ></UserView>
                    )}
                    {SelectedModell == Modells.Company && (
                        <CompanyView
                            key={i}
                            name={e.name}
                            address={e.address}
                            email={e.email}
                            phoneNumber={e.phoneNumber}
                            onClick={(event) => onClick && onClick(event, e)}
                        ></CompanyView>
                    )}
                    {SelectedModell == Modells.Job && (
                        <JobView
                            key={i}
                            Title={e.title}
                            Description={e.description}
                            onClick={(event) => onClick && onClick(event, e)}
                        ></JobView>
                    )}
                </>
            ))}
        </>
    );
};

const ListView = ({ SelectedModell }: { SelectedModell: number }) => {
    const navigate = useNavigate();
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
                    onClick={(event: any, modelldata: any) => {
                        // console.log(modelldata);
                        navigate("/details-view");
                    }}
                ></SelectedListModellView>
            )}
        </>
    );
};

export default ListView;
