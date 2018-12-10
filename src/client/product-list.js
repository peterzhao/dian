import React, { Component } from 'react'
import Product from './product'

export default class ProductList extends Component {
  getData = () => {
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
  ]}

  render() {
    const products = this.getData().map((p, i) => <Product name={p.name} price={p.price} key={i}/>)
    return (
      <div className='products'>
        {products}
      </div>
    )
  }
}
