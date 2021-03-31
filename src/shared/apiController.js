import axios from 'axios'
import { productDataUrl } from './apiUrls';

export const fetchData = () => {
  let productsPromise = fetchProducts()
  return {
    pizzas: wrapPromise(productsPromise),
  }
}

const wrapPromise = (promise) => {
  let status = 'pending'
  let result
  let suspender = promise.then(
    (r) => {
      status = 'success'
      result = r
    },
    (e) => {
      status = 'error'
      result = e
    }
  )
  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    },
  }
}

const fetchProducts = async () => {
  const finalData = await axios
    .get(productDataUrl)
    .then((response) => {
      return response
    })
    .catch((err) => {
      return Promise.reject({
        data: err.response,
      })
    })

  return Promise.resolve(finalData.data)
}
