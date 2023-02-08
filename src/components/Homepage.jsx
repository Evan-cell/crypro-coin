import React from 'react'
import millify from 'millify'
import Cryptocurrencies from './Cryptocurrencies';
import { Typography,Row,Col,Statistic, } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/Cryptoapi'
import News from './News';

const {Title} = Typography
function Homepage() {
  const {data, isFetching} = useGetCryptosQuery(10)
  console.log(data)
  const globalStats = data ?.data ?.stats;

  if(isFetching) return 'loading....'
  return (
    <div>
      <Title level={2} className="heading">Global crypto starts</Title>
      <Row>
        <Col span={12}><Statistic title="Total Crypto currencies" value={millify(globalStats.total)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges
)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic></Col>
        <Col span={12}><Statistic title="Total 24hr Volume" value={millify(globalStats.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}></Statistic></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={2} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Latest crypto news</Title>
        <Title level={2} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Title>
      </div>
      <News simplified />
    </div>
  )
}

export default Homepage