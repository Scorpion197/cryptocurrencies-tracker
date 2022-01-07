import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
//antd 
import { Card, Row, Col, Input} from 'antd';

//hooks 
import { useCoinsFetch } from '../../Hooks/useCoinsFetch';

//css 
import './cryptos.css'; 

const Cryptos = () => {

    const {loading, error, state} = useCoinsFetch(); 
    const data = state.data; 
    console.log("state: ", state);
    return (
        
        <div>
            <Row gutters={[32, 32]} className="crypto-card-container">

                {state.data.coins.map((currency) => (

                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
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