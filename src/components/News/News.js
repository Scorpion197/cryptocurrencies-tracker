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
           
           <Row gutter={[32, 16]}>
               {allNews.map((news, i) => (

                   <Card 
                        key ={i}
                        hoverable 
                        style={{width: 300 }}
                        cover={<img alt="news" src={news?.image?.thumbnail?.contentUrl || demoImage }/>}
                    >
                        <Meta title={news.name} description={

                            news.description > 50 ? `${news.description.substring(0, 50)}...` : news.description

                        } />
                    </Card>
               ))

               }
           </Row>
       </div>
    )
}

export default News;