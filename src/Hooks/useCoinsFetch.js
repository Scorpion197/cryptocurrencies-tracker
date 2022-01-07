import React, { useState, useEffect } from 'react';

import API from '../API';

const initialState = {

    stats: {}, 
}

export const useCoinsFetch = () => {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false); 
    const [state, setState] = useState(initialState);

    const getData = async () => {

        try {

            setLoading(true); 
            setError(false);

            const data = await API.fetchCoins(); 
            setState(prev => ({

                ...data, 
                stats : data.data.stats
            }));

            setLoading(false); 

        }catch(error) {

            console.log(error);
            setError(true);
        }
    
    }

    useEffect(() => {

        getData();
    }, []);

    
    return {loading, error, state};
}