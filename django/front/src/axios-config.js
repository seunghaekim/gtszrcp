import axios from 'axios'
import app from './main'

const baseURL = process.env.NODE_ENV === 'production' ? 'http://app.gtszrcp.gtszoffice.com' : 'http://localhost:8000'

const instance = axios.create({
  baseURL
})

instance.interceptors.request.use(config => {
  app.$Progress.start() // for every request start the progress
  return config
})

instance.interceptors.response.use(response => {
  app.$Progress.finish() // finish when a response is received
  return response
})

export default instance // export axios instace to be imported in your app
