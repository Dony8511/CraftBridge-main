import React, { Component } from 'react'
import '../styles/advantage-card.css'


export default class Card extends Component {
  render() {
    return (
      <div className='advantage'>
            <img alt='as' className='card-icon' src={this.props.iconPath}/>
            <h3 className='card-title'>{this.props.title}</h3>
            <h3 className='card-title2'>{this.props.title2}</h3>
      </div>
    )
  }
}
