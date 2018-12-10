import React, { Component } from 'react'

export default class Prodcut extends Component {
  onToggleLiked = () => {
    this.props.onToggleLiked(this.props.id)
  }

  render() {
    const buttonClass = this.props.liked ? 'active' : 'inactive'
    return (
      <div className={'product'}>
        <span className={'name'}>{this.props.name}</span>
        <span className={'price'}>{this.props.price}</span>
        <button onClick={this.onToggleLiked} className={buttonClass}>♥</button>
      </div>
    )
  }
}

