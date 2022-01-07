import React, { useState, useEffect } from 'react';

import API from '../API';

const initialState = [];


export const useCurrenciesFetch = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false); 
    const [state, setState] = useState(initialState);

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

    return {loading, error, state};
}