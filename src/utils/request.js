import axios from 'axios'
import headers from './headers'

const SUCCESS_CODE = '00000'
const TIMEOUT = 5000

export const instance = axios.create({
  timeout: TIMEOUT,
  withCredentials: true,
})

instance.interceptors.response.use(
  ({ status, ...response }) => {
    if (status === 200) {
      const { data } = response
      if (data.code === SUCCESS_CODE) {
        return data
      }
      return Promise.reject(data)
    }
    return Promise.reject(response?.data)
  },
  (e) => Promise.reject(e)
)

const request = (requestConfig) => {
  const { url, prefix } = requestConfig
  const config = {
    headers: {
      ...headers,
    },
    ...requestConfig,
    url: prefix + url,
  }
  return instance(config)
}

export default request
