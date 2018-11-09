import React from 'react'
import createClass from 'create-react-class'
import styles from './product.css'

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
    const buttonClass = this.state.liked ? styles.active : styles.inactive
    return (
      <div className='product'>
        <span>{this.props.name}</span>
        <span>{this.props.price}</span>
        <button onClick={this.toggleLiked} className={buttonClass}>♥</button>
      </div>
    )
  }
})

