import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './product'
import { actionCreators } from './reducer'

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggleLiked: (index) => {
      dispatch(actionCreators.toggleLike(index))
    }
  }
}

class ProductList extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
