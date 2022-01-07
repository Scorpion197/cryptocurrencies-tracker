import React, { useState, useEffect } from 'react';

import API from '../API';

const initialState = [];


export const useCurrenciesFetch = (limit) => {

    const [curLoading, setLoading] = useState(false);
    const [curError, setError] = useState(false); 
    const [curState, setState] = useState(initialState);

    const getData = async () => {

        try {

            setLoading(true); 
            setError(false);

            const data = await API.fetchCurrencies(limit); 

            setState(data.data.coins);
            setLoading(false);
            
        } catch(error) {

            setError(true);
        }
    }

    useEffect(() => {

        getData();
    }, []);

    return {curLoading, curError, curState};
}