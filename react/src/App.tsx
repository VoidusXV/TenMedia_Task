import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import styles from "./AppStyles.module.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className={styles.MainContainer}>
            <NavigationBar></NavigationBar>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/login" element={<Login />}></Route>
                {/* <Route path="/register" element={<Register />}></Route>  */}
            </Routes>
        </div>
    );
}

export default App;
