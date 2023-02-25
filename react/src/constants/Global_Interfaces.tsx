declare type ISODateString = Date;

interface IJob {
    jobID: Number;
    companyID: Number;
    title: string;
    salary: Number;
    description: string;
    location: string;
}

interface ICompany {
    companyID: Number;
    name?: string;
    address?: string;
    phoneNumber?: string;
    email?: string;
}

interface IUserData {
    userID?: Number;
    companyID?: Number;
    firstname?: string;
    surname?: string;
    email?: string;
    password?: string;
    created_at?: ISODateString;
    updated_at?: ISODateString;
    remember_token?: string;
}

interface IModells {
    Job: IJob;
    Company: ICompany;
    UserData: IUserData;
}

enum ViewStyles {
    Undefined,
    ListView,
    Details,
}
enum Modells {
    Job,
    Company,
    User,
}

export { ViewStyles, Modells };
export type { IJob, ICompany, IUserData, IModells };
