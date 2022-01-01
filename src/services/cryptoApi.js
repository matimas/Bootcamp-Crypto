import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': '8463116129msh26af7704342ef65p1f95fajsnc4a437f665e9',
};
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
	}),
});

export const { useGetCryptosQuery } = cryptoApi;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     orderBy: 'marketCap',
//     search: 'Bitco',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '8463116129msh26af7704342ef65p1f95fajsnc4a437f665e9'
//   }
// };
