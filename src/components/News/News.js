import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useNewsFetch } from '../../Hooks/useNewsFetch';
import Loader from '../Loader/Loader';

import './news.css';

const News = () => {

    const { newsError, newsLoading, newsState} = useNewsFetch(); 

    if (newsLoading || newsState.length == 0)
        return <Loader />

    else {

        const data = newsState; 
    }

    console.log(newsState);

    return (
        
        <div>
            news
        </div>
    )
}

export default News;