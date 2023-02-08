import {createApi, fetchBaseQuery} from '@reduxjs/toolkit'

const cryptoApiHeaders = {
        'X-RapidAPI-Key': '71375eced9msh7c6b37227e6be82p17f352jsn2dd1978a502b',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (url) => ({url,Headers: cryptoApiHeaders})

export const Cryptoapi =createApi({
    reducerPath: 'Cryptoapi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '71375eced9msh7c6b37227e6be82p17f352jsn2dd1978a502b',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
  