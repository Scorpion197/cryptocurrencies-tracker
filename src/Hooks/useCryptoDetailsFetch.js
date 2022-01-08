import React, {useState, useEffect } from 'react'; 

import API from '../API';

export const useCryptoDetailsFetch = (uuid) => {

    const initialState = {};
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 
    const [state, setState] = useState(initialState);

    const getData = async (uuid) => {

        try {

            setLoading(true); 
            setError(false); 

            const data = await API.fetchCryptoDetails(uuid);
            
            setLoading(false);
            setState(data.data.coin); 

        }catch(error) {

            setError(true);
        }
    } 

    useEffect(() => {

        getData(uuid);
    }, []); 

    return {loading, error, state}
}