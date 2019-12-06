import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accounts from "./Accounts";
import App from "./App";
import PageNotFound from "./PageNotFound";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';


class Routing extends React.Component {
    render() {
        return(
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/accounts">Accounts</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/accounts" component={Accounts}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </nav>
            </Router>
        )
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));
