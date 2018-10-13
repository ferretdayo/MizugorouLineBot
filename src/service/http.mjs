import axios from 'axios'

export const http = axios.create({
  responseType: 'json'
})

// http.interceptors.request.use((config) => {
//   console.log(JSON.stringify(config))
// })