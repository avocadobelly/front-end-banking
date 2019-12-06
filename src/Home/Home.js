import React from 'react';
import Navbar from "../nav/Nav";
import WelcomeScreen from "./Welcome/WelcomeScreen";

class Home extends React.Component {
    render() {
        return(
            <div>
                <Navbar></Navbar>
                <WelcomeScreen></WelcomeScreen>
            </div>

        )
    }
}

export default Home;
