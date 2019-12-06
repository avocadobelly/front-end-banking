import React from 'react';
import './pageNotFound.css';
import {Link} from 'react-router-dom';

class PageNotFound extends React.Component {
    render() {
        return (
            <div>
                <h1>Oops! Something went wrong :(</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default PageNotFound;
