import React from 'react'
import { Typography,Select,Row,Col,Avatar,Card } from 'antd'
import moment from 'moment/moment'
import { useGetCryptosNewsQuery } from '../services/CryptoNewsApi'

const {Text, Title} = Typography
const {Option} = Select
function News({simplified}) {
  const {data: cryptoNews} = useGetCryptosNewsQuery({AllNews:'CryptoCurrency', count: simplified ? 10 : 100})
  console.log(cryptoNews)
  return (
    <div>News</div> 
  )
}

export default News