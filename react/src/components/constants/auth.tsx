import { createContext } from "react";
import { IUserData } from "./Global_Interfaces";

interface IUser {
    isLoggedIn?: Boolean;
    UserData?: IUserData | null;
}

const AuthContext = createContext({
    isLoggedIn: false,
    UserData: null,
});

export { AuthContext };
export type { IUser };
