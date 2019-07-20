import axios from 'axios'
const __API__ = 'https://api.github.com'

const instance = axios.create({
  baseURL: __API__,
  headers: {
    //'Authorization' : 'token 06d2b2###a8ebe8825d####f8c84040ff32###50eccdcbf9e3 '
    'Authorization' : 'token 06d2b2a8ebe8825df8c84040ff3250eccdcbf9e3 '
  }
})
export default instance
