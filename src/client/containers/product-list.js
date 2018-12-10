import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/product-list'
import { toggleLiked } from '../actions/product'

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggleLiked: (index) => {
      dispatch(toggleLiked(index))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
