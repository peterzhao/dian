import React from 'react'
import createClass from 'create-react-class'

export default createClass({
  getInitialState() {
   return {
     liked: false
   }
  },
  
  toggleLiked() {
    this.setState({
      liked: !this.state.liked
    })
  },

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
})

