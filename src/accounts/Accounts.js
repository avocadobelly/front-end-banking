import React from "react";
import useGetAccounts from "./GetAccounts";
import Navbar from "../nav/Nav";

function Accounts() {
    const accounts = useGetAccounts()
    const accountElements = accounts.map((account) =>
        <div>
            <h1>Account Holder:{account.accountHolder}</h1>
            <h2>Balance:£{account.balance.$numberDecimal}</h2>
        </div>
    );
    return (
        <div>
            <Navbar></Navbar>
            <div>
                { accountElements }
            </div>
        </div>
    );
}

export default Accounts;