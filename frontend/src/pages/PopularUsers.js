import React, { Children, Component } from 'react'
import ItemCard from '../components/itemCard'
import { useDispatch, useSelector } from 'react-redux'

import Categories from '../components/categories'
import MasterCard from '../components/masterCard'

import Oleg from './../img/users/oleg.png'
import Victor from './../img/users/Victor.png'
import Dasha from './../img/users/Dasha.png'
import Kira from './../img/users/Kira.png'

import axios from './../axios'
import { fetchUsers } from '../redux/slices/users'

export const PopularMasters = () => {

    const { users } = useSelector(state => state.users)
    React.useEffect(() => {
        // axios.get('/items')
        dispatch(fetchUsers())
    }, [])

    const isUsersLoading = users.status === 'loading'

    const dispatch = useDispatch()

    return (
        <>
            <section className='popularMasters m60'>
                <div className='container'>
                    <h2 className='title'>Популярные мастера</h2>
                    <div className='masterList' >
                        {(isUsersLoading ? [...Array(1)] : users.items).map((obj, index) => isUsersLoading ?(<h3 className='subtitle'>Загрузка</h3>):
                        (obj.isVerifed == true ? (<MasterCard prefixVariant='1' imgSrc={obj.avatarUrl} masterName={obj.fullName} description={obj.myWork} />) : (<></>)))}

                        {/* <ItemCard imgSrc={Victor} price='4500' masterName='Виктор Корнеплод' description='Женская сумка из натуральной кожи' />
                            <ItemCard imgSrc={Dasha} price='7100' masterName='Дарья Р.' description='Чемодан из натуральной кожи с рисунком' />
                            <ItemCard imgSrc={Kira} price='5500' masterName='Кира Йошикаге' description='Чехол для телефона из натуральной кожи' /> */}

                    </div>
                </div>
            </section>

        </>
    )

}

export default PopularMasters
