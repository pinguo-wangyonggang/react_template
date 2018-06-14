import axios from 'axios'
import qs from 'qs'
import 'es6-promise'

axios.defaults.withCredentials = true
function HttpGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      if(res.status === 200){
        resolve(res.data)
      }
      else if(res.status === 402){
         console.log('not login')
      }  
    }).catch(err => {
      reject(err)
    })
  })
}

function HttpPost(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    ).then(res => {
        if(res.status === 200){
            resolve(res.data)
          }
          else if(res.status === 402){
             console.log('not login')
          } 
    }).catch(err => {
      reject(err)
    })
  })
}

const Http = {
    HttpGet: HttpGet,
    HttpPost: HttpPost
}
export default Http;