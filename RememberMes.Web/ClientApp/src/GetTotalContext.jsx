import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const GetTotalContext = createContext();

const GetTotalComponent = (props) => {

    const [totalPending, setTotalPending] = useState(0);
    const [totalConfirmed, setTotalConfirmed] = useState(0);
    const [totalRefused, setTotalRefused] = useState(0);

    const refreshTotals = async () => {
        const { data } = await axios.get('/api/candidate/count');
        setTotalConfirmed(data.totalConfirmed);
        setTotalPending(data.totalPending);
        setTotalRefused(data.totalRefused);
    };

    useEffect(() => {
        refreshTotals();
    }, []);

    const allTotals = {
        totalPending,
        totalConfirmed,
        totalRefused
    };

    return (
        <GetTotalContext.Provider value={{ allTotals, refreshTotals }}>
            {props.children}
        </GetTotalContext.Provider>
    );

};

const useTotals = () => {
    return useContext(GetTotalContext)
};

export default GetTotalComponent;
export { useTotals };