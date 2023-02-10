import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '71375eced9msh7c6b37227e6be82p17f352jsn2dd1978a502b',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
}
const baseUrl = 'https://crypto-news16.p.rapidapi.com/news/all'

const createRequest = (url) => ({url,Headers: cryptoNewsHeaders})

export const cryptoNewsApi =createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: (AllNews,count) => createRequest(`/news/search?q=${AllNews}&safeSearch=off&textFormat=Raw&freshness=Day&Count=${count}`)
        })
    })
})
export const {
    useGetCryptosNewsQuery,
} = cryptoNewsApi