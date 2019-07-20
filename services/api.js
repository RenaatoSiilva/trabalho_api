import axios from 'axios'
const __API__ = 'https://api.github.com'

const instance = axios.create({
  baseURL: __API__,
  headers: {
    'Authorization' : 'token 43e1ee475d8e51fc80ffa3c908800bc48b4d0f80'
  }
})
export default instance
