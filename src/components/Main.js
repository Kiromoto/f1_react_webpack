import React, {Fragment} from "react";
import "../styles/Main.css";
import Weather from "./Weather";

function Main() {
    return (
        <Fragment>
            <main>
                <h1>Прогноз погоды на ближайшие 5 дней</h1>
                <div>
                    <Weather />
                </div>
            </main>
        </Fragment>
    );
}

export default Main;