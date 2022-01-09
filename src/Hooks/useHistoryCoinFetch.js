import React, {useState, useEffect } from 'react';

import API from '../API';


export const useHistoryCoinFetch = (uuid, timePeriod) => {

    const initialState = []; 
    const [hisLoading, setLoading] = useState(false); 
    const [hisError, setError] = useState(false);
    const [hisState, setState] = useState(initialState);

    const getData = async (uuid, timePeriod) => {

        try {

            setLoading(true);
            setError(false); 

            const data = await API.fetchCoinHistory(uuid, timePeriod);

            setLoading(false); 
            setState(data.history);
        }catch(error) {

            setError(true);
        }
    }

    useEffect(() => {

        getData(uuid, timePeriod); 
    }, []); 

    return {hisLoading, hisError, hisState}
}