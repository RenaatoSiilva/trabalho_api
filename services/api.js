import axios from 'axios'
const __API__ = 'https://api.github.com'

// const instance = axios.create({
//   baseURL: __API__
// })

const instance = () => {
  return axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      'Authorization' : 'token 4f12bd2336de405040a0446c430d12f12d379357'
    }
  })
}

export default instance()
