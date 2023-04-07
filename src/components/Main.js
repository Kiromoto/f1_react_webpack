import React, {Component, Fragment} from "react";
import "../styles/Main.css";

class Main extends Component {
    render() {
        return (
            <Fragment>
                <main>
                    <h1>Print from App.js</h1>
                    <h1>Print second line from App.js</h1>
                    <div>
                        <img alt="girl"/>
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default Main;