import React from 'react'; 
import millify from 'millify';
import { Typography, Row, Col, Statistic, Divider } from 'antd';
import { Link } from 'react-router-dom';

//components
import Cryptos from '../Cryptos/Cryptos';
import News from '../News/News';
import Navbar from '../Navbar/Navbar';
import Loader from '../Loader/Loader';

import './home.css';

//hooks 
import { useCoinsFetch } from '../../Hooks/useCoinsFetch';
import { useCurrenciesFetch } from '../../Hooks/useCurrenciesFetch';

const  { Title } = Typography; 


const HomePage = () => {

    const {loading, error, state} = useCoinsFetch(); 

    if (loading || !state.stats.hasOwnProperty('total'))
        return <Loader />

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

                        <Col span={12}><Statistic className="stat-title" title="Total Cryptocurrencies" value={millify(data['total'])}/></Col>
                        <Col span={12}><Statistic className="stat-title" title="Total Exchanges" value={data.totalExchanges}/></Col>
                        <Col span={12}><Statistic className="stat-title" title="Total Coins" value={millify(data['totalCoins'])}/></Col> 
                        <Col span={12}><Statistic className="stat-title" title="Total Market Cap" value={`$ ${millify(data.totalMarketCap)}`}/></Col>
                        <Col span={12}><Statistic className="stat-title" title="Total 24h volume" value={`$ ${millify(data.total24hVolume)}`}/></Col>
                        <Col span={12}><Statistic className="stat-title" title="Total Markets" value={millify(data['totalMarkets'])}/></Col>

                    </Row>

                    <div className="home-heading-container">
                        <Title level={2} className="home-title"> Top 10 Cryptos In The World</Title>
                        <Title level={3} className="show-more"><Link className="show-more-link" to="/cryptos">Show more</Link></Title>
                    </div>

                    <Cryptos simplified={true} />

                    <div className="home-heading-container">
                        <Title level={2} className="home-title"> Top 10 Trending News</Title>
                        <Title level={3} className="show-more"><Link className="show-more-link" to="/cryptos">Show more</Link></Title>
                    </div>
                    
                    <News simplified={true} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;