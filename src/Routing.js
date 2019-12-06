import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Accounts from "./accounts/Accounts";
import PageNotFound from "./pageNotFound/PageNotFound";
import Home from "./Home/Home";


class Routing extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/accounts" component={Accounts}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </Router>
        )
    }
}

export default Routing;