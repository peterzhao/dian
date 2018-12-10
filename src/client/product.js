import React, { Component } from 'react'

export default class Prodcut extends Component {
  state = {
    liked: false
  }

  toggleLiked = () => {
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    const buttonClass = this.state.liked ? 'active' : 'inactive'
    return (
      <div className={'product'}>
        <span className={'name'}>{this.props.name}</span>
        <span className={'price'}>{this.props.price}</span>
        <button onClick={this.toggleLiked} className={buttonClass}>♥</button>
      </div>
    )
  }
}

