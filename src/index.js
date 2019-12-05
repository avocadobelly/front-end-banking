import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import useGetAccounts from "./GetAccounts";

function App() {
    const accounts = useGetAccounts()
    const accountElements = accounts.map((account) =>
        <p>{account.accountHolder}</p>
    );
    return (
        <div className="App">
            { accountElements }
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
