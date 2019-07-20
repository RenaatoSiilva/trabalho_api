import axios from 'axios'
const __API__ = 'https://api.github.com'

const instance = axios.create({
  baseURL: __API__,
  headers: {
    'Authorization' : 'token dc6d573bb124d5c4f61baeaba4a434668aca2502'
  }
})
export default instance
