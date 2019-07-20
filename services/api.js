import axios from 'axios'
const __API__ = 'https://api.github.com'

const instance = axios.create({
  baseURL: __API__,
  headers: {
    'Authorization' : 'token 06d2b2###a8ebe8825d####f8c84040ff32###50eccdcbf9e3 '
  }
})
export default instance
