import React, { useState } from 'react'; 
import { useParams } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser'; 
import millify from 'millify';
import {Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useCryptoDetailsFetch } from '../../Hooks/useCryptoDetailsFetch';
import { useHistoryCoinFetch } from '../../Hooks/useHistoryCoinFetch';

import Loader from '../Loader/Loader'; 
import Navbar from '../Navbar/Navbar';
import LineChart from '../LineChart/LineChart';

import './details.css'; 

const {Title, Text} = Typography; 
const { Option } = Select; 

const CryptoDetails = () => {

    const { coinId } = useParams();
    const {loading, error, state} = useCryptoDetailsFetch(coinId); 
    const coinData = state; 
    const [timePeriod, setTimePeriod] = useState('7d');
    const {hisLoading, hisError, hisState} = useHistoryCoinFetch(coinId, timePeriod);
    
    if (loading || !coinData.hasOwnProperty("uuid"))

        return <Loader />

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
      { title: 'Price to USD', value: `$ ${coinData?.price && millify(coinData?.price)}`, icon: <DollarCircleOutlined /> },
      { title: 'Rank', value: coinData?.rank, icon: <NumberOutlined /> },
      { title: '24h Volume', value: `$ ${coinData?.volume && millify(coinData?.volume)}`, icon: <ThunderboltOutlined /> },
      { title: 'Market Cap', value: `$ ${coinData?.marketCap && millify(coinData?.marketCap)}`, icon: <DollarCircleOutlined /> },
      { title: 'All-time-high(daily avg.)', value: `$ ${coinData?.allTimeHigh?.price && millify(coinData?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];
      
    const genericStats = [
      { title: 'Number Of Markets', value: coinData?.numberOfMarkets, icon: <FundOutlined /> },
      { title: 'Number Of Exchanges', value: coinData?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
      { title: 'Aprroved Supply', value: coinData?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
      { title: 'Total Supply', value: `$ ${coinData?.supply?.total && millify(coinData?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
      { title: 'Circulating Supply', value: `$ ${coinData?.supply?.circulating && millify(coinData?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
    ];  
    
    
    return (
        <>  
            <Navbar className="navbar" />
            <div className="coin-detail-container">

                <div className="coin-heading-container">
                    <Title level={2} className="coin-name">
                        {coinData.name} ({coinData.symbol}) Price
                    </Title>
                    <p>{coinData.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
                </div>
                
                <Select 
                    defaultValue="7d" 
                    className="select-timeperiod" 
                    placeholder="Select Time Period"
                    onChange={(value) => setTimePeriod(value)}>
                    
                    {time.map((date) => <Option key={date}>{date} </Option>)}
                </Select>
                <LineChart 
                
                        coinHistory={coinHistory} 
                        currentPrice={millify(coinData.price)}
                        coinName={coinData.name}
                />

                <Col className="stats-container">
                    <Col className='coin-value-statistics'>
                        <Col className='coin-value-statistics-heading'>

                            <Title level={3} className="coin-details-heading">
                                {coinData.name} Value Stats
                            </Title>
                            <p>
                                An overview showing the stats of {coinData.name}
                            </p>
                        </Col>
                        {stats.map(({icon, title, value}) => (

                            <Col className="coin-stats">
                                <Col className='coin-stats-name'>
                                    <Text> { icon } </Text>
                                    <Text> { title } </Text>
                                </Col>
                                <Text className="stats">{value}</Text>
                            </Col>
                        ))

                        }
                    </Col>
                    <Col className='other-stats-info'>
                        <Col className='coin-value-statistics-heading'>

                            <Title level={3} className="coin-details-heading">
                                More Statistics
                            </Title>
                            <p>
                                An overview showing the stats of all cryptocurrencies
                            </p>
                        </Col>
                        {genericStats.map(({icon, title, value}) => (

                            <Col className="coin-stats">
                                <Col className='coin-stats-name'>
                                    <Text> { icon } </Text>
                                    <Text> { title } </Text>
                                </Col>
                                <Text className="stats">{value}</Text>
                            </Col>
                        ))

                        }
                    </Col>
                </Col>
            </div>
        </>
    )
}

export default CryptoDetails;
