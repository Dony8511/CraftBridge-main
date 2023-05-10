import React, { Component } from 'react'
import './../styles/canCard.css'

export default class CanCard extends Component {
  render() {
    return (
      <div className='CanCard'>
        <h3 className='cardNum'>{this.props.number}</h3>
        <p className='cardDescrp'>{this.props.description}</p>
      </div>
    )
  }
}
