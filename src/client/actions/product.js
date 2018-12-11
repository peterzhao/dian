import axios from 'axios'

export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'

export const toggleLiked = index => {
  return { type: TOGGLE_LIKE, payload: index}
}

export const requestProducts = () => {
  return { type: REQUEST_PRODUCTS }
}

export const receiveProducts = (data) => {
  return { type: RECEIVE_PRODUCTS, payload: data }
}

export const receiveError = (error) => {
  return { type: RECEIVE_ERROR, payload: error }
}

export const fetchProducts = () => {
  return async function(dispatch) {
    dispatch(requestProducts())
    return axios.get('/api/products')
      .then(response => response.data)
      .then(data => dispatch(receiveProducts(data)))
      .all(e => dispatch(receiveError(error)))
  }
}