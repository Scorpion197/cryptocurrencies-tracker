import React from 'react';
import { Link } from 'react-router-dom';
import {Menu, Typography, Button, Avatar } from 'antd'; 
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../../images/cryptocurrency.png';
import './navbar.css';

const Navbar = () => {

    return (
        
        <div className="nav-container">

            <div className="logo-container">

                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">

                    <Link className="link" to="/"> CryptoNews</Link>
                </Typography.Title>
            </div>

            <Menu className="menu" them="dark">

                <Menu.Item  className="menu-item" icon={<HomeOutlined />}>
                    <Link className="link" to="/">Home</Link>
                </Menu.Item>

                <Menu.Item className="menu-item" icon={<MoneyCollectOutlined />}>
                    <Link className="link" to="/exchanges">Exchanges</Link>
                </Menu.Item>

                <Menu.Item className="menu-item" icon={<MoneyCollectOutlined />}>
                    <Link className="link" to="/cryptos">Cryptocurrencies</Link>
                </Menu.Item>

                <Menu.Item className="menu-item" icon={<BulbOutlined />}>
                    <Link className="link" to="/news">News</Link>
                </Menu.Item>

            </Menu>
            
        </div>
    )
}

export default Navbar;