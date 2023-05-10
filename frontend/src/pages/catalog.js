import React, { Component } from 'react'
import './../styles/catalog.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ButtonBase from '../components/buttons'
import MasterCard from '../components/masterCard'

import Categories from '../components/categories'
import {AllItems} from './AllItems'
import {PopularMasters} from './PopularUsers'
import CatalogImg from './../img/CatalogImg.png'

import Oleg from './../img/users/oleg.png'
import Victor from './../img/users/Victor.png'
import Dasha from './../img/users/Dasha.png'
import Kira from './../img/users/Kira.png'

import ItemCard from '../components/itemCard'
import {useDispatch, useSelector} from 'react-redux'
import axios from './../axios'
import { fetchPosts } from '../redux/slices/posts'

export default class Catalog extends Component {
  render() {

    // const isPostsLoading = posts.status === 'loading'

    // const dispatch = useDispatch()
  
  
  
    // const { posts } = useSelector(state => state.posts)
    //     React.useEffect(() =>{
    //         // axios.get('/items')
    //         dispatch(fetchPosts())
    //     }, [])

    return (
      <>
        <section className='main catalog m60'>
          <div className='container revr'>
            <div className='text-block'>
              <h1 className='title'>Каталог</h1>
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing тест текста, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu non. Posuere sollicitudin aliquam ultrices sagittis orci a </p>
              <ButtonBase link="#learn" content="изучить" />
            </div>
          </div>

          <div className='ImgContainer2 max100'>
            <img alt='leatherMaster' src={CatalogImg} className='shadow' />
          </div>
        </section>

        {/* <section className='popularMasters m60'>
          <div className='container'>
            <h2 className='title'>Популярные мастера</h2>
            <div className='masterList'>
              <MasterCard imgSrc={Oleg} prefixVariant='1' masterName='Олег Вещи' description='изделиями из кожи' />
              <MasterCard imgSrc={Victor} prefixVariant='1' masterName='Виктор Корнеплод' description='изделиями из кожи' />
              <MasterCard imgSrc={Dasha} prefixVariant='2' masterName='Дарья Р.' description='мелкие декоративные предметы' />
              <MasterCard imgSrc={Kira} prefixVariant='2' masterName='Кира Йошикаге' description='картины из природных обьектов' />
              <MasterCard imgSrc={Oleg} masterName='Олег Вещи' description='изделиями из кожи' />
            </div>
          </div>
        </section> */}

        <PopularMasters/>

        <section id='learn' className='LearnCatalog m60'>
          <div className='container home'>
            <div className='catalog-img categoriesImg shadow'>
              <div className='learnCatalog-box'>
                <div className='box-content'>
                  <div className='text-block'>
                    <h2 className='title'>Категории</h2>
                    <p className='description'>В каталоге вы можете выбрать уже из готовых работ или заказать нужную вам вещь у мастера</p>
                  </div>
                  <div className='btns catalog'>
                    <ButtonBase link='/catalog' content='категории' />
                    <ButtonBase link='/catalog' content='все товары' />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* {([Array(10)]).map(() => (
          <div>ASaD</div>
            // <ItemCard imgSrc={Oleg} price='1200' masterName='Олег Вещи' description='Разделочная доска из натурального дуба' />
        ))} */}
        <AllItems />
        <Categories />
      </>
    )
  }
}
