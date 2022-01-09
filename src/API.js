import axios from "axios";

const API = {

    fetchCoins: async () => {

        const endpoint = 'https://coinranking1.p.rapidapi.com/coins';
        const options = {

            method: 'GET',
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h',
              symbols: 'BTC',
              uuids: 'Qwsogvtv82FCd',
              tiers: '1',
              tags: 'defi',
              orderBy: 'marketCap',
              search: 'Bitco',
              orderDirection: 'desc',
              limit: '50',
              offset: '0'
            },
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': '352849db3bmsh4ce2bb900555c17p1adedbjsnb5e62b206d13'
            }
        };

        const response = await (await fetch(endpoint, options)).json(); 

        return response;
    }, 

    fetchCurrencies: async (limit) => {


      const endpoint = 'https://coinranking1.p.rapidapi.com/coins';
      const options = {

            method: 'GET',
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h',
              symbols: 'BTC',
              uuids: 'Qwsogvtv82FCd',
              tiers: '1',
              tags: 'defi',
              orderBy: 'marketCap',
              search: 'Bitco',
              orderDirection: 'desc',
              limit: limit,
              offset: '0'
            },
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': '352849db3bmsh4ce2bb900555c17p1adedbjsnb5e62b206d13'
            }
        };

        const response = await (await fetch(endpoint, options)).json(); 
        return response;

    },

    fetchNews: async () => {

      const endpoint = 'https://bing-news-search1.p.rapidapi.com/news';
      const options = {

        method: 'GET',
        params: {textFormat: 'Raw', safeSearch: 'Off'},
        headers: {
          'x-bingapis-sdk': 'true',
          'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
          'x-rapidapi-key': '352849db3bmsh4ce2bb900555c17p1adedbjsnb5e62b206d13'
        }

      };

      const response = await (await fetch(endpoint, options)).json(); 

      return response;
    }, 

    fetchCryptoDetails: async (uuid) => {

      const endpoint = `https://coinranking1.p.rapidapi.com/coin/${uuid}`; 
      const options = {

        method: 'GET',
        params: {timePeriod: '24h'},
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '352849db3bmsh4ce2bb900555c17p1adedbjsnb5e62b206d13'
        }
      }; 

      const response = await (await fetch(endpoint, options)).json(); 

      return response;
    },

    fetchCoinHistory: async (uuid, timePeriod) => {

      const endpoint = `https://coinranking1.p.rapidapi.com/coin/${uuid}/history`;
      const options = {

        method: 'GET',
        params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: `${timePeriod}`},
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': '352849db3bmsh4ce2bb900555c17p1adedbjsnb5e62b206d13'
        }
      }; 

      const response = await (await fetch(endpoint, options)).json(); 

      return response;
    },

}

export default API;