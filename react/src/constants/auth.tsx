interface IUserData {
    UserID?: Number;
}

interface IUser {
    isLogged: Boolean;
    UserData: IUserData;
}

const UserData: IUser = { isLogged: false, UserData: {} };
export { UserData };
