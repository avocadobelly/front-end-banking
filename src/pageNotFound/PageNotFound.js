import React from 'react';
import './pageNotFound.css';

class PageNotFound extends React.Component {
    render() {
        return (
            <div>
                <h1>Oops! Something went wrong :(</h1>
                <a href={"http://localhost:3000/"}>Back to Home</a>
            </div>
        )
    }
}

export default PageNotFound;
