import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useNewsFetch } from '../../Hooks/useNewsFetch';
import Loader from '../Loader/Loader';

import './news.css';

const { Text, Title } = Typography;
const { Meta } = Card;

const News = ({simplified}) => {

    const { newsError, newsLoading, newsState} = useNewsFetch(); 

    if (newsLoading || newsState.length == 0)
        return <Loader />

    

    let allNews = [];
    const demoImage = 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    if (simplified)
        allNews = newsState.slice(0, 8); 
    
    else 
        allNews = newsState;

    return (
        
       <div>
           
           <Row gutter={[]}>
               {allNews.map((news, i) => (
                   <Col xs={32} sm={24} lg={8} key={i}>
                    <Card 
                         key ={i}
                         hoverable 
                         style={{height: 300 }, {width:400}}
                         cover={<img style={{width: 400}, {height: 300}} alt="news" src={news?.image?.thumbnail?.contentUrl || demoImage }/>}
                     >
                         <Meta title={news.name} description={

                             news.description > 50 ? `${news.description.substring(0, 50)}...` : news.description

                         } />
                     </Card>
                    </Col>
               ))

               }
           </Row>
       </div>
    )
}

export default News;