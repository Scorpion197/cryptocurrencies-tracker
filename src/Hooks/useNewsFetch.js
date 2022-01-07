import React, { useState, useEffect } from 'react';

import API from '../API';

const initialState = []; 

export const useNewsFetch = () => {

    const [newsError, setError] = useState(false); 
    const [newsLoading, setLoading] = useState(false);
    const [newsState, setState] = useState(initialState);

    const getData = async() => {

        try {

            setLoading(true); 
            setError(false); 

            const data = await API.fetchNews(); 

            setState(data.value);
            setLoading(false);
            
        }catch(err) {

            setError(true);
        }
    }

    useEffect(() => {

        getData();
    }, []); 
    
    return { newsError, newsLoading, newsState}
}