import axios from 'axios'
const __API__ = 'https://api.github.com'

// const instance = axios.create({
//   baseURL: __API__
// })

const instance = () => {
  return axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      'Authorization' : 'token 6c71786999255509d10a1c29c2c8858cbddec005 '
    }
  })
}

export default instance()




