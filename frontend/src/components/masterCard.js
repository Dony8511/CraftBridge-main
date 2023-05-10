import React, { Component } from 'react'
import './../styles/masterCard.css'

export default class MasterCard extends Component {

  render() {
    let prefixVariant = this.props.prefixVariant
    let prefix = ''

    if(prefixVariant == 1){
      prefix = 'я занимаюсь '
    }
    else if(prefixVariant == 2){
      prefix = 'я делаю '
    }
    else{
      prefix = 'Моё занятие: '
    }

    return (
      <div className='masterCard'>
        <p className='masterName'>{this.props.masterName}</p>
        <img alt="photo" src={this.props.imgSrc} className='masterImg' />
        <p className='masterDescription'>{prefix}<span className='red'>{this.props.description}</span></p>
      </div>
    )
  }
}
