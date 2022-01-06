import React from 'react'; 
import millify from 'millify';
import { Typography, Row, Col, Statistic, Divider } from 'antd';
import { Link } from 'react-router-dom';

//components
import Cryptos from '../Cryptos/Cryptos';
import News from '../News/News';
import Navbar from '../Navbar/Navbar';
import './home.css';

//hooks 
import { useCoinsFetch } from '../../Hooks/useCoinsFetch';

const  { Title } = Typography; 


const HomePage = () => {

    const {loading, error, state} = useCoinsFetch(); 
    const data = state.stats;

    return (

        <div className="main-container">
            <div className="navbar-container">

                <Navbar className="navbar" />

            </div>
            <div className="grid-container">
                <div className="sub-grid-container">
                    <Title level={2} className="heading">Global Crypto Stats</Title>

                    <Row>

                        <Col span={12}><Statistic title="Total Cryptocurrencies" value={data['total']}/></Col>
                        <Col span={12}><Statistic title="Total Exchanges" value={data.totalExchanges}/></Col>
                        <Col span={12}><Statistic title="Total Coins" value={data['totalCoins']}/></Col>

                        <Col span={12}><Statistic title="Total Market Cap" value={data['totalMarketCap']}/></Col>
                        <Col span={12}><Statistic title="Total 24h volume" value={data['total24hVolume']}/></Col>
                        <Col span={12}><Statistic title="Total Markets" value={data['totalMarkets']}/></Col>

                    </Row>
                </div>
            </div>
        </div>
    )
}

export default HomePage;