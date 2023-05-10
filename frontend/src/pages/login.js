import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAuth, selectIsAuth } from '../redux/slices/auth';

export const Login = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()

    const { register, handleSubmit, setError, formState: { errors, isValid } }
     = useForm({
        defaultValues: {
            email: 'vasiliyushkov.8511@gmail.com',
            password: '12345',
        },
        mode: 'onChange'
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values))

        if(!data.payload){
            return alert('не удалось авторизоваться')
        }

        if('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token)

        }

        if('fullName' in data.payload){
            window.localStorage.setItem('UserName', data.payload.fullName)
        }
    }

    if(isAuth){
        
        return <Navigate to='/' />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('email', { required: 'Укажите почту' })} type='email' label='Email' error={Boolean(errors.email?.message)} helperText={errors.email?.message} />
            <TextField  {...register('password', { required: 'Укажите пароль' })} label='Password' error={Boolean(errors.password?.message)} helperText={errors.password?.message} />
            <Button disabled={!isValid} type='submit' size='medium' fullWidth variant="contained">Войти</Button>
        </form>
    )

}