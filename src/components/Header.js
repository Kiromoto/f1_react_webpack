import React, {Component, Fragment} from "react";
import "../styles/Header.css";
import App from "./App";

class Header extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <div>
                        <img alt="logo for site"/>
                    </div>
                    <nav>
                        <ul>
                            <a href="#">
                                <li>First</li>
                            </a>
                            <a href="#">
                                <li>Second</li>
                            </a>
                            <a href="#">
                                <li>Third</li>
                            </a>
                        </ul>
                    </nav>
                </header>
            </Fragment>
        );
    }
}

export default Header;