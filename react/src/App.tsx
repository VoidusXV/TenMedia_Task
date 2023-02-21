import { useState } from "react";
import styles from "./AppStyles.module.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
    return (
        <div className={styles.MainContainer}>
            <NavigationBar></NavigationBar>
        </div>
    );
}

export default App;
