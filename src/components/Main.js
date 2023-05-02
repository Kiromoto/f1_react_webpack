import React, {Fragment} from "react";
import "../styles/Main.css";
import Weather from "./Weather";

function Main() {
    return (
        <Fragment>
            <main>
                <div>
                    <Weather />
                </div>
            </main>
        </Fragment>
    );
}

export default Main;