import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic, } from 'antd'
import { Link } from 'react-router-dom'

const {Title} = Typography
function Homepage() {
  return (
    <div>
      <Title level={2} className="heading">Global crypto starts</Title>
      <Row>
        <Col span={12}><Statistic title="Total Crypto currencies" value={5}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={5}></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={5}></Statistic></Col>
        <Col span={12}><Statistic title="Total 24hr Volume" value={5}></Statistic></Col>
        <Col span={12}><Statistic title="Total Markets" value={5}></Statistic></Col>
      </Row>
    </div>
  )
}

export default Homepage