import axios from 'axios'
const __API__ = 'https://api.github.com'

// const instance = axios.create({
//   baseURL: __API__
// })

const instance = () => {
  return axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      'Authorization' : 'token 81eecac2d1011bcf6c3923e580b4e96db24ce7f9'
    }
  })
}

export default instance()




