import axios from 'axios'
export default {
    getData: ()=>
    axios({
        method: 'GET',
        url: 'https://crypto-news16.p.rapidapi.com/news/all',
        headers: {
          'X-RapidAPI-Key': '71375eced9msh7c6b37227e6be82p17f352jsn2dd1978a502b',
          'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
        },
        'params': {
            'search': 'parameter'
        }
    })
}