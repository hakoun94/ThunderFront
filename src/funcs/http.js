import configs from '../configs' ;
import axios from 'axios' ;

// Get Request
const getRequest = (url) => {
  const { baseUrl } = configs ;
  const dest = baseUrl + '/' + url ;
  return axios.get(dest) ;
}

// for both Put , Post request
const request = (url, payload ,type = 'post') => {
  
  const { baseUrl } = configs ;
  const dest = baseUrl + '/' + url ;
  return axios({
    method : type ,
    url : dest ,
    data : payload ,
  })
}

export {
  getRequest ,
  request
}
