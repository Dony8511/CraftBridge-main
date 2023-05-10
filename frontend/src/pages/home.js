import React, { Component } from 'react'
import '../styles/home.css'
import arrow from '../icons/arrow.png';
import Card from '../components/advantage-card';
import CanCard from '../components/CanCard';
import ButtonBase from '../components/buttons';

import Icon1 from './../icons/masters-icon.png';
import Icon2 from './../icons/interface-icon.png';
import Icon3 from './../icons/pc-icon.png';
import Icon4 from './../icons/hand-icon.png';
import Icon5 from './../icons/bonus-icon.png';

import Check from './../icons/checkDark-icon.png';
import checkDark from './../icons/check-icon.png';

import LeatherMasterImg from './../img/leatherMaster.png';
import deliveryImg from './../img/delivery.png';

export default class Home extends Component {
  render() {
    return (
      <>
        <section className='main'>
          <div className='container home'>

            <div className='home-img shadow'>
              <div className='title-block'>
                <h1 className='title white'>Найдите то, что  вам нужно</h1>
                <p className='title-descrp'>сервис, который позволяет потребителям легко находить, покупать или продавать изделия ручной работы, сделанные другими людьми, не выходя из дома</p>
                <a href='#youCan'><img alt='arrow' src={arrow} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className='advantages m60'>
          <div className='container dfc'>
            <h2 className='title2'>Наши преимущества</h2>
            <div className='advantages-row'>

              <Card title2='все мастера мастера проверяются перед верификацией' title="проверенные мастера" iconPath={Icon1}></Card>
              <Card title2="интерфейс сделан так, чтобы все люди смогли его понять" title='удобный интерфейс' iconPath={Icon2}></Card>
              <Card title2="сайт доступен на всех устройствах от пк до телефонов" title='доступность' iconPath={Icon3}></Card>
              <Card title2="перед отправкой все работы проверяются нашими курьерами" title='надежность' iconPath={Icon4}></Card>
              <Card title2="если вы часто делаете заказы мы можем сделать вам небольшой сюрприз" title='бонусы' iconPath={Icon5}></Card>

            </div>
          </div>
        </section>

        <section id='youCan' className='youCan m60'>
          <div className='ImgContainer'>
            <img alt='leatherMaster' src={LeatherMasterImg} className='shadow' />
          </div>
          <div className='container'>
            <h2 className='title'>С <span>CraftBridge</span> вы сможете:</h2>

            <div className='canList'>
              <CanCard number='1' description='Легко найти нужный вам товар или же сделать заказ непосредственно у выбранного вами мастера' />
              <CanCard number='2' description='Легко найти нужный вам товар или же сделать заказ непосредственно у выбранного вами мастера' />
              <CanCard number='3' description='Зарегестрироваться в качестве мастера на нашей платформе, продавать уже готовые работы или делать изделия на заказ' />
            </div>
          </div>
        </section>

        <section className='LearnCatalog m60'>
          <div className='container home'>
            <div className='catalog-img shadow'>
              <div className='learnCatalog-box'>
                <div className='box-content'>
                  <div className='text-block'>
                    <h2 className='title'>Изучите каталог</h2>
                    <p className='description'>В каталоге вы можете выбрать уже из готовых работ или заказать нужную вам вещь у мастера </p>
                  </div>
                  <ButtonBase link='/catalog' content='каталог работ' />
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className='Delivery m60'>
          <div className='container'>
            <h2 className='title'>Как происходит доставка?</h2>
            <p className='description'>Мы заботимся о наших клиентах и поэтому перед отправкой работы она проверяется на целостность и соответствие заказу. Предлагаем 2 варианта получения заказа:</p>
            <div className='canList'>
              <CanCard number='1' description='Через удобную для вас почту, на указанный вами адрес. В стоимость будет включена доставка' />
              <CanCard number='2' description='Лично приехать на адрес указанный мастером или в один из наших пунктов' />
            </div>
          </div>
          <div className='ImgContainer2'>
            <img alt='Delivery Man' src={deliveryImg} className='shadow' />
          </div>
        </section>

        {/* <section className='tarifs'>
          <div className='container'>
            <h2 className='title'>Наши тарифы</h2>
            <div className='TarifCardsList'>

              <div className='TarifCard'>
                <div className='text-block'>
                  <h3 className='CardName'>Start</h3>
                  <p className='description'>с этим тарифом вы получаете:</p>
                  <ul>
                    <li>
                      <img src={checkDark} className='checkIcon' />
                      <p className='description'>до 5 работ в пртфолио</p>
                    </li>
                    <li>
                      <img src={checkDark} className='checkIcon' />
                      <p className='description'>база мастеров</p>
                    </li>
                  </ul>
                  <h3 className='price red'>бесплатно</h3>
                </div>

                <div className='priceBlock'>

                  <ButtonBase variant="dark" content='регистрация' />
                </div>
              </div>

              <div className='TarifCard darkCard'>
                <div className='text-block'>
                  <h3 className='CardName white'>Master</h3>
                  <p className='description white'>с этим тарифом вы получаете:</p>
                  <ul>
                    <li>
                      <img src={Check} className='checkIcon' />
                      <p className='description white'>до 10 работ в пртфолио</p>
                    </li>
                    <li>
                      <img src={Check} className='checkIcon' />
                      <p className='description white' >база заказчиков</p>
                    </li>
                    <li>
                      <img src={Check} className='checkIcon' />
                      <p className='description white'>продвижение в каталоге</p>
                    </li>
                  </ul>
                  <h3 className='price white'>450₽/<span className='small'>мес</span></h3>
                </div>

                <div className='priceBlock'>

                  <ButtonBase content='регистрация' />
                </div>
              </div>

              <div className='TarifCard redCard'>
                <div className='text-block'>
                  <h3 className='CardName white'>Buisness</h3>
                  <p className='description white'>с этим тарифом вы получаете:</p>
                  <ul className='white'>
                    <li>
                      <img src={Check} className='checkIcon' />
                      <p className='description white'>до 15 работ в пртфолио</p>
                    </li>
                    <li>
                      <img src={Check} className='checkIcon' />
                      <p className='description white'>база заказчиков</p>
                    </li>
                    <li>
                      <img src={Check} className='checkIcon' />
                      <p className='description white'>реклама на главной странице</p>
                    </li>
                    <li>
                      <img src={Check} className='checkIcon' />
                      <p className='description white'>уменьшеная комиссия</p>
                    </li>
                    <li>
                      <img src={Check} className='checkIcon' />
                      <p className='description white'>база мастеров</p>
                    </li>
                  </ul>
                  <h3 className='price white'>950₽/<span className='small'>мес</span></h3>
                </div>

                <div className='priceBlock'>

                  <ButtonBase variant="dark" content='регистрация' />
                </div>
              </div>

            </div>
          </div>
        </section> */}
      </>
    )
  }
}
