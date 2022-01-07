import React, { useState, useEffect } from 'react';

import API from '../API';

const initialState = [];


export const useCurrenciesFetch = () => {

    const [curLoading, setLoading] = useState(false);
    const [curError, setError] = useState(false); 
    const [curState, setState] = useState(initialState);

    const getData = async () => {

        try {

            setLoading(true); 
            setError(false);

            const data = await API.fetchCurrencies(); 

            setState(data.data.coins);

        } catch(error) {

            setError(true);
        }
    }

    useEffect(() => {

        getData();
    }, []);

    return {curLoading, curError, curState};
}