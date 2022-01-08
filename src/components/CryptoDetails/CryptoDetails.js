import React from 'react'; 
import { useParams } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser'; 
import millify from 'millify';
import {Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

const CryptoDetails = () => {

    const { coinId } = useParams(); 
    return (

        <div>
            Crypto details { coinId }
        </div>
    )
}

export default CryptoDetails;
