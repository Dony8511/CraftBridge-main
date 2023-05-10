import React, { Component } from 'react'
import './../styles/categories.css'
import CategoryCard from './../components/categoryCard'

export default class Categories extends Component {
  render() {
    return (
        <section className='categories'>
          <div className='container'>
            <h2 className='title'>Категории</h2>
            <div className='categoiesCardsBlock'>
              <div className='categoeiesRow'>
                <CategoryCard imgVariant="woodBg" link='/catalog/wood' categoryName='изделия из дерева' />
                <CategoryCard imgVariant="metalBg" link='/catalog/metal' categoryName='изделия из металла' />
                <CategoryCard imgVariant="leatherBg" link='/catalog/leather' categoryName='изделия из кожи' />
              </div>
              <div className='categoeiesRow'>
                <CategoryCard imgVariant="paintsBg" link='/catalog/paints' categoryName='живопись' />
                <CategoryCard imgVariant="decoBg" link='/catalog/deco' categoryName='декорации и украшения' />
              </div>
            </div>
          </div>
        </section>
    )
  }
}
