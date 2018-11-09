import React from 'react'
import createClass from 'create-react-class'
import Product from './product'

export default createClass({
  getData()  {
    return [
    {
      name: 'Book Shelf',
      price: '212.5'
    },
    {
      name: 'Rice Cooker',
      price: '112.6'
    },
    {
      name: 'Cup 7 - red',
      price: '12.3'
    },
    {
      name: 'Nike Sports Shoes',
      price: '99.9'
    }
  ]},

  render() {
    const products = this.getData().map(p => <Product name={p.name} price={p.price} />)
    return (
      <div className='products'>
        {products}
      </div>
    )
  }
})
