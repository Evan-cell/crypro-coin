import React,{useState} from 'react'
import { Typography,Select,Row,Col,Avatar,Card } from 'antd'
import moment from 'moment/moment'
import Api from '../services/Api'

const {Text, Title} = Typography
const {Option} = Select
function News({simplified}) {
  let [responseData,setResponseData] = useState('')

  const fetchData = (e) =>{
    e.preventDefault()

    Api.getData()
    .then((response)=>{
      setResponseData(response.data)
      console.log(response)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div><h1>{responseData.title}</h1></div> 
  )
}

export default News