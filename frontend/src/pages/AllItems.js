import React, { Component } from 'react'
import ItemCard from '../components/itemCard'
import { useDispatch, useSelector } from 'react-redux'

import Categories from '../components/categories'

import Oleg from './../img/users/oleg.png'
import Victor from './../img/users/Victor.png'
import Dasha from './../img/users/Dasha.png'
import Kira from './../img/users/Kira.png'

import axios from './../axios'
import { fetchPosts } from '../redux/slices/posts'

export const AllItems = () => {

    const { posts } = useSelector(state => state.posts)
    React.useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const isPostsLoading = posts.status === 'loading'

    const dispatch = useDispatch()
    if(posts.items.childCount == 0){
        return (
            <>
            <h3 className='subtitle'>Загрузка</h3>
            </>
        )
    }
    else{
        return(

            <>
            <section className='popularMasters m60'>
                <div className='container'>
                    <h2 className='title'>Все изделия</h2>
                    <div className='masterList'>
                        {(isPostsLoading ? [...Array(1)] : posts.items).map((obj, index) => isPostsLoading ? (<h3 className='subtitle'>Загрузка</h3>) :
                            (<ItemCard imgSrc={obj.imageUrl} title={obj.title} price={obj.price} masterName={obj.user.fullName} description={obj.description} />))}

                    </div>
                </div>
            </section>
        </>
        )
    }

}

export default AllItems
