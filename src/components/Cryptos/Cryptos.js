import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
//antd 
import { Card, Row, Col, Input} from 'antd';

//hooks 
import { useCoinsFetch } from '../../Hooks/useCoinsFetch';
import { useCurrenciesFetch } from '../../Hooks/useCurrenciesFetch';
//css 
import './cryptos.css'; 

//components 
import Loader from '../Loader/Loader';

const Cryptos = ({ simplified }) => {

    const count = simplified ? 10 : 50;
    const {curLoading, curError, curState} = useCurrenciesFetch(count);
    var topCurrencies = [];

    if (curState.length != 0 && simplified) 

        topCurrencies = curState.slice(0, 10);

    else 
        topCurrencies = curState;

    
    if (curLoading) return <Loader />
    
    return (
        
        <div>
            <Row gutter={[32, 32]} className="crypto-card-container">

                {topCurrencies.map((currency) => (

                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/cryptos/${currency.id}`}>
                            <Card 
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} />}
                                hoverable
                            >
                                <p> Price: {millify(currency.price)}</p>
                                <p> Market Cap: {millify(currency.marketCap)}</p>
                                <p> Daily change: {millify(currency.change)} % </p>

                            </Card>
                        </Link>
                    </Col>
                ))

                }
            </Row>
        </div>
    )
}

export default Cryptos;