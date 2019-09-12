// <script>
//   import axios from 'axios'
//   import qs from 'qs'

//   const baseURL = 'http://localhost:8899'

//   axios.interceptors.request.use((req) => {
//     if(req.method  === 'post'){
//         req.data = qs.stringify(req.data)
//     }
//     return req
//   },(error) => {
//     return Promise.reject(error)
//   })

//   const request = axios.create({
//     baseURL,
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//     },
//     withCredentials: true // 允许携带cookie
//   })

//   export default {
//     request: request
//   }
// </script>