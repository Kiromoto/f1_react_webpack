import React, {Fragment} from "react";
import "../styles/Main.css";
import Weather from "./Weather";

function Main() {
    return (
        <Fragment>
            <main>
                <h1>Print from App.js</h1>
                <h1>Print second line from App.js</h1>
                <div>
                    <Weather />
                </div>
            </main>
        </Fragment>
    );
}

export default Main;