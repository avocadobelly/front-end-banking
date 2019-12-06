import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import useGetAccounts from "./GetAccounts";

function App() {
    const accounts = useGetAccounts()
    const accountElements = accounts.map((account) =>
        <div>
            <h1>Account Holder:{account.accountHolder}</h1>
            <h2>Balance:£{account.balance.$numberDecimal}</h2>
        </div>
    );
    return (
        <div className="App">
            { accountElements }
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
