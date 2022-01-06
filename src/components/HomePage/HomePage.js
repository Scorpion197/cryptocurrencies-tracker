import React from 'react'; 
import millify from 'millify';
import { Typography, Row, Col, Statistic, Divider } from 'antd';
import { Link } from 'react-router-dom';
import Cryptos from '../Cryptos/Cryptos';
import News from '../News/News';
import Navbar from '../Navbar/Navbar';
import './home.css';

const  { Title } = Typography; 


//componts 


const HomePage = () => {

    return (

        <div className="main-container">
            <div className="navbar-container">

                <Navbar className="navbar" />

            </div>
            <div className="grid-container">
                <div className="sub-grid-container">
                    <Title level={2} className="heading">Global Crypto Stats</Title>

                    <Row>

                        <Col span={12}><Statistic title="Total Cryptocurrencies" value="5"/></Col>
                        <Col span={12}><Statistic title="Total Exchanges" value="5"/></Col>
                        <Col span={12}><Statistic title="Total Market Cap" value="5"/></Col>
                        <Col span={12}><Statistic title="Total 24h volume" value="5"/></Col>
                        <Col span={12}><Statistic title="Total Markets" value="5"/></Col>

                    </Row>
                </div>
            </div>
        </div>
    )
}

export default HomePage;