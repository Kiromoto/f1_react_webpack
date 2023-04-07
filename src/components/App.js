import React, {Component, Fragment} from "react";
import "../styles/App.css";
import Header from "./Header";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>

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


export default App;