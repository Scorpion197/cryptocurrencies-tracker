import React from 'react';
import { Line } from 'react-chartjs-2'; 
import { Col, Row, Typography} from 'antd'; 
import {Chart,  
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend} from 'chart.js'

const { Title } = Typography;
Chart.register(
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
    );
const LineChart = ({coinHistory, currentPrice, coinName}) => {

    const coinPrice = []; 
    const coinTimeStamp = []; 

    for (let i = 0; i < coinHistory.length; i++) {

        coinPrice.push(coinHistory[i].price);
        coinTimeStamp.push(new Date(coinHistory[i].timestamp).toLocaleDateString());
    }

    const data = {

        labels: coinTimeStamp, 
        datasets: [

            {

                label: 'Price in USD', 
                data: coinPrice, 
                fill: false, 
                backgroundColor: '#0071bd', 
                borderColor: '#0071bd'
            }
        ]
    }

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return (

        <div className="main-container">
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart</Title>
                <Col className="price-container">
                    <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>

                </Col>
            </Row>
            <Line
                datasetIdKey='id'
                data={data}
                options={options}
                className="line"
            />  
        </div>

    )
}

export default LineChart;
