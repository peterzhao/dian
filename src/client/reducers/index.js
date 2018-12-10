import { types } from '../actions/product'

const initialState = {
  products: [
    {
      name: 'Book Shelf',
      price: '212.5',
      liked: false
    },
    {
      name: 'Rice Cooker',
      price: '112.6',
      liked: false
    },
    {
      name: 'Cup 7 - red',
      price: '12.3',
      liked: false
    },
    {
      name: 'Nike Sports Shoes',
      price: '99.9',
      liked: false
    }
  ]
}

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

export const reducer = (state = initialState, action) => {
  const { products } = state
  const { type, payload } = action
  switch(type) {
    case types.TOGGLE_LIKE:
      return {
        ...state,
        products: toggleProduct(products, payload)
      }
  }
  return state
}