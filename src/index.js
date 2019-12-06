import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accounts from "./accounts/Accounts";
import App from "./App";
import PageNotFound from "./pageNotFound/PageNotFound";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';


class Routing extends React.Component {
    render() {
        return(
            <Router>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/accounts" component={Accounts}/>
                        <Route component={PageNotFound}/>
                    </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));
