import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

import './styles/App.css';
import './styles/popup.css';
import './styles/reset.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
// import ButtonBase from './components/buttons';

// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import PopUp from './components/PopUp';

import Home from './pages/home'
import Catalog from "./pages/catalog";
import AllItems from './pages/AllItems';
import NotFound from "./pages/NotFound";

import { Login } from './pages/login';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, logout, selectIsAuth } from './redux/slices/auth';
import { Register } from './pages/register';


let UserName

function App() {


  const dispatch = useDispatch()



  React.useEffect( async () => {
    const UserData = await dispatch(fetchAuthMe())

    if(UserData){
      window.localStorage.removeItem('UserName')
      window.localStorage.setItem('UserName', UserData.payload.fullName)
      console.log(UserData.payload.fullName)
      // window.localStorage.setItem('UserName', UserData.payload.fullName)
      
    }
  }, [])

  const [data, setData] = useState(null)

  const OnClickLogout = () => {
    if(window.confirm('Вы действительно хотите выйти из аккаунта?')){
      dispatch(logout())
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('UserName')
    }
    
  }

  const onSubmit = (values) => {
    console.log(values)
  }

  const isAuth = useSelector(selectIsAuth);
  const [popupActive, setpopupActive] = useState(false)

  return (
    <div className="App">

      <PopUp active={popupActive} setActive={setpopupActive}>
        {/* <Login/> */}
      </PopUp>

      <Header>
        {isAuth == false ?
          (<>
          {/* onClick={() => setpopupActive(true)} */}
            <a href='/login'  className='btn red dark'>вход</a>
            <a href='/register' className='btn red'>регистрация</a>
          </>
          )
          :
          (<>
            <a href='/profile' className='btn UserName'>{(window.localStorage.getItem('UserName'))}</a>
            <a href='#' onClick={OnClickLogout} className='btn red'>выход</a>
          </>)

        }

      </Header>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/catalog/items' element={<AllItems />} />

        <Route path='*' element={<NotFound />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
