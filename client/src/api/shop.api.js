import axios from 'axios'

const shopApi = axios.create({
  baseURL: import.meta.env.VITE_AURAB_APIURL
})

shopApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('sessionToken')
  }

  return config
})

export { shopApi }
