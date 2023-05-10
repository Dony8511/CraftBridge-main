import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAuth, fetchRegister, selectIsAuth } from '../redux/slices/auth';

export const Register = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()

    const { register, handleSubmit, setError, formState: { errors, isValid } }
     = useForm({
        defaultValues: {
            fullName: 'Иван Иванов',
            myWork: 'изделиями из кожи',
            email: 'vasiliyushkov.8511@gmail.com',
            password: '12345',
        },
        mode: 'onChange'
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values))

        if(!data.payload){
            return alert('не удалось зарегестрироваться')
        }

        if('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token)
            window.localStorage.setItem('UserName', data.payload.fullName)
        }
    }

    if(isAuth){
        return <Navigate to='/' />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('fullName', { required: 'Укажите ваше ФИО' })} label='ФИО' error={Boolean(errors.fullName?.message)} helperText={errors.fullName?.message} />
            <TextField {...register('myWork', { required: 'Укажите ваше занятие' })} label='я занимаюсь: ' error={Boolean(errors.myWork?.message)} helperText={errors.myWork?.message} />
            <TextField {...register('email', { required: 'Укажите почту' })} type='email' label='Email' error={Boolean(errors.email?.message)} helperText={errors.email?.message} />
            <TextField  {...register('password', { required: 'Укажите пароль' })} label='Password' error={Boolean(errors.password?.message)} helperText={errors.password?.message} />
            <Button disabled={!isValid} type='submit' size='medium' fullWidth variant="contained">Войти</Button>
        </form>
    )

}