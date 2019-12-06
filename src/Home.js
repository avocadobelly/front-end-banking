import React from 'react';
import Navbar from "./nav/Nav";

class Home extends React.Component {
    render() {
        return(
            <div>
                <Navbar></Navbar>
                <h1>WELCOME TO THE APP</h1>
            </div>

        )
    }
}

export default Home;