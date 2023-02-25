import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import styles from "./AppStyles.module.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/Login/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { onLogin } from "./pages/Login/Login_Functions";
import { AuthContext } from "./components/constants/auth";

function App() {
    // console.log("Launch Website");

    const [isLoading, setLoading] = useState(true);
    const getAuthState = onLogin(
        () => setLoading(true),
        () => setLoading(false)
    );

    return (
        <AuthContext.Provider value={getAuthState}>
            {!isLoading && (
                <>
                    <div className={styles.MainContainer}>
                        <NavigationBar></NavigationBar>

                        <Routes>
                            <Route path="/" element={<Dashboard />}></Route>
                            <Route
                                path="/login"
                                element={<LoginPage />}
                            ></Route>
                            <Route
                                path="/manage-jobad"
                                element={<LoginPage />}
                            ></Route>
                        </Routes>
                    </div>
                </>
            )}
        </AuthContext.Provider>
    );
}

export default App;
