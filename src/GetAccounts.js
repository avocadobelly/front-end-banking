import React, {useState, useEffect} from 'react';

function useGetAccounts() {
    const [accounts, setAccounts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4400/accounts')
            .then((data)=>{return data.json()})
            .then((data)=>{
                setAccounts(data)
            })
    }, [])
    return accounts;
}

export default useGetAccounts;
