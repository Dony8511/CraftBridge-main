import React, { Component } from 'react'
import './../styles/categoryCard.css'

export default class CategoryCard extends Component {
  render() {
    return (
        <a href={this.props.link} className={'categoryBg ' + this.props.imgVariant}>{this.props.categoryName}</a>
    )
  }
}
