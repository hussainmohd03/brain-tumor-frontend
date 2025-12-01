import { BASE_URL } from '../globals'
import axios from 'axios'

const Client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

const refreshAccessToken = async () => {
  await Client.post('/auth/refresh')
}

let isRefreshing = false
let refreshPromise = null

Client.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (!error.response) return Promise.reject(error)

    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      if (isRefreshing) {
        await refreshAccessToken()
        return Client(originalRequest)
      }
      isRefreshing = true
      refreshPromise = refreshAccessToken()

      try {
        await refreshPromise
        return Client(originalRequest)
      } catch (error) {
        return Promise.reject(error)
      } finally {
        isRefreshing = false
        refreshPromise = null
      }
    }
    return Promise.reject(error)
  }
)

export default Client