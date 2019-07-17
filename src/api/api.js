import axios from 'axios'

let baseObj = {
  baseURL: '/api',
  timeout: 200000
}
const axiosApi = axios.create(baseObj)

axiosApi.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosApi.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
export default axiosApi
