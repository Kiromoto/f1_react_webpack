import React, {useState, Fragment} from "react";
import "../styles/Header.css";

function Header(props) {
    let [count, increaseCount] = React.useState(0);

    const handleClick = () => {
        // alert('TEST! Press button!');
        increaseCount(count + 1);
    }
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
                    <button className="btn" onClick={handleClick}>Click ME! {count} times!!!</button>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;