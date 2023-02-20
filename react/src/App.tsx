import { useState } from "react";

import "./App.css";

function App() {
    return (
        <div style={{ width: "100vh", height: "100vh" }}>
            <div
                style={{
                    width: "100%",
                    height: "20%",
                    backgroundColor: "red",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <a>Email</a>
                    <a>Passwort</a>
                </div>

                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <input className="kok"></input>
                    <input className="kok"></input>
                </div>
            </div>
        </div>
    );
}

export default App;
