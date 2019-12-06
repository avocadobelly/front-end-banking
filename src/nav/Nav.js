import React from "react";
import './nav.css';

class Navbar extends React.Component {

    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/accounts">Accounts</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
