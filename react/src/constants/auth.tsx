import { createContext } from "react";
import { IUserData } from "./Global_Interfaces";

const companyID = 1;

interface IUser {
    isLoggedIn?: Boolean;
    UserData?: IUserData | null;
}

const AuthContext = createContext({
    isLoggedIn: false,
    UserData: null,
});

export { AuthContext, companyID };
export type { IUser };
