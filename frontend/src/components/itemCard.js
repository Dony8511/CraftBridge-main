import React, { Component } from 'react'

export default class ItemCard extends Component {
    render() {

        return (
          <div className='masterCard'>
            <p className='masterName'>{this.props.masterName}</p>
            <img alt="photo" src={this.props.imgSrc} className='masterImg' />
            <p className='masterTitle'>{this.props.title}</p>
            <p className='masterDescription'>{this.props.description}</p>
            <p className='price'>{this.props.price}₽</p>
          </div>
        )
      }
}
