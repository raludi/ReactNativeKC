
import marvelApi from 'marvel-comics-api';

export const fetchCharacters = () => {
    return new Promise((resolve, reject) => {
        marvelApi('characters', {
            publicKey: 'd0883d6cbeec97aef4bf31380ba9b402',
            privateKey: '01c93fd0a2cdebf44b05423e5e49b4191e9f46d2',
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