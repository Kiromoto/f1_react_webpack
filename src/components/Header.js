import React, {Component, Fragment} from "react";
import "../styles/Header.css";

const handleClick = () => {
    alert('TEST! Press button!');
    console.log('TEST! Press button! print console')

}

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
                    <div>
                        <button className="btn" onClick={handleClick}>Click ME!</button>
                    </div>
                </header>
            </Fragment>
        );
    }
}

export default Header;