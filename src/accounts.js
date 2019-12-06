import React from "react";
import useGetAccounts from "./GetAccounts";

function Accounts() {
    const accounts = useGetAccounts()
    const accountElements = accounts.map((account) =>
        <div>
            <h1>Account Holder:{account.accountHolder}</h1>
            <h2>Balance:£{account.balance.$numberDecimal}</h2>
        </div>
    );
    return (
        <div className={"accounts"}>
            { accountElements }
        </div>
    );
}

export default Accounts;