import axios from 'axios'

// Create instance called instance
const instance = axios.create({
   
    baseURL: 'https://crypto-news16.p.rapidapi.com/news/top/5',
    headers: {
      'X-RapidAPI-Key': '71375eced9msh7c6b37227e6be82p17f352jsn2dd1978a502b',
      'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
    },
});

export default {
    getData: () =>
    instance({
        'method':'GET',
        'url':'/query',
        'params': {
            'search':'parameter',
        },
    }),
    postData: () =>
    instance({
        'method': 'POST',
        'url':'/api',
        'data': {
            'item1':'data1',
            'item2':'item2'
        }
    })
}