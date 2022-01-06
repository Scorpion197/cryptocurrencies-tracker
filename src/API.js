import axios from "axios";

const API = {

    fetchCoins: async () => {

        const endpoint = 'https://coinranking1.p.rapidapi.com/coins';
        options = {

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
    

}