import React, { Component } from 'react'
import Product from './product'


export default class ProductList extends Component {
  render() {
    const { products } = this.props
    const productList = products.map((p, i) => <Product
      name={ p.name }
      price={ p.price }
      liked={ p.liked }
      onToggleLiked={ this.props.onToggleLiked }
      id={ i }
      key={ i }/>)
    return (
      <div className='products'>
        { productList }
      </div>
    )
  }
}

