import { createContext } from "react";

declare type ISODateString = Date;

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

interface IUser {
    isLoggedIn?: Boolean;
    UserData?: IUserData | null;
}
//const UserData: IUser = { Data: undefined };

const AuthContext = createContext({
    isLoggedIn: false,
    UserData: null,
});

export { AuthContext };
export type { IUserData, IUser };
