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
    isLogged: Boolean;
    UserData: IUserData;
}

const UserData: IUser = { isLogged: false, UserData: {} };
export { UserData };
