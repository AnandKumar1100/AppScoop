import apisauce from 'apisauce'

const create = (baseURL = 'https://www.googleapis.com/books/v1/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
    },
    timeout: 10000
  })
    
  const GET = (relativeUrl, queryParms) => api.get(relativeUrl, queryParms)
    .then(response => ({ response: response }))
    .catch(error => ({ error }))

  return {
    GET
  }
}

export default {
  create
}
