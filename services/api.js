import axios from 'axios'
const __API__ = 'https://api.github.com'

const instance = axios.create({
  baseURL: __API__
})

export default instance
