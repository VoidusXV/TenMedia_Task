declare type ISODateString = Date;

interface IJob {}

interface ICompany {}

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
export type { IJob, ICompany, IUserData };
