import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import api from "../../backend/axios";
import { IUserData } from "../../constants/auth";

const cookies = new Cookies();

function Login(data?: IUserData, func?: any) {
    cookies.set("isLoggedIn", true);
    cookies.set("uuid", data?.remember_token);
    func();
}

function isLogged() {
    return cookies.get("isLoggedIn");
}

function onLogin(onLoading?: any, onLoaded?: any) {
    const [getValue, setValue] = useState({
        isLoggedIn: false,
        UserData: null,
    });

    useEffect(() => {
        try {
            onLoading && onLoading();
            const payload = { remember_token: cookies.get("uuid") };

            api.post("/getUserByUuid", payload).then((response) => {
                setValue({
                    isLoggedIn: cookies.get("isLoggedIn"),
                    UserData: response?.data?.user,
                });
            });
        } finally {
            onLoaded && onLoaded();
        }
    }, []);

    return getValue;
}

export { Login, isLogged, onLogin };
