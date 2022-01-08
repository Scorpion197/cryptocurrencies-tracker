import React from 'react'; 
import { useParams } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser'; 
import millify from 'millify';
import {Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useCryptoDetailsFetch } from '../../Hooks/useCryptoDetailsFetch';
import Loader from '../Loader/Loader'; 
const CryptoDetails = () => {

    const { coinId } = useParams();
    const {loading, error, state} = useCryptoDetailsFetch(coinId); 
    const coinData = state; 

    if (loading || !coinData.hasOwnProperty("uuid"))

        return <Loader />

    
    return (

        <div>
            Crypto details { coinId }
        </div>
    )
}

export default CryptoDetails;
