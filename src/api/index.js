
import marvelApi from 'marvel-comics-api';

const PUBLIC_KEY='';
const PRIVATE_KEY='';

export const fetchCharacters = () => {
    return new Promise((resolve, reject) => {
        marvelApi('characters', {
            publicKey: PUBLIC_KEY,
            privateKey: PRIVATE_KEY,
            timeout: 4000,
            query: {
              limit: 50
            },
            headers: {
              Referer: 'marvelcomics.api.com'
            }
          }, function (err, body) {
            if (err) throw reject(err)
            resolve(body.data.results)
          })
    }) 
}