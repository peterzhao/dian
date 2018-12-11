import {
  TOGGLE_LIKE,
  FETCH_PRODUCTS,
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  RECEIVE_ERROR
} from '../actions/product'


const toggleProduct = (products, index) => {
  return products.map((product, i) => {
    if (i === index) {
      if (product.liked === undefined) {
        product.liked = false
      }
      product.liked = ! product.liked
    }
    return product
  })
}

export const reducer = (state = { products: []}, action) => {
  const { products } = state
  const { type, payload } = action
  switch(type) {
    case TOGGLE_LIKE:
      return {
        ...state,
        products: toggleProduct(products, payload)
      }
    case REQUEST_PRODUCTS:
      return {
        ...state,
        requestIndicate: true
      }
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        requestIndicate: false,
        error: null,
        products: payload
      }
    case RECEIVE_ERROR:
      return {
        ...state,
        requestIndicate: false,
        error: payload
      }
  }
  return state
}