import React, { Component } from "react";
import '../styles/header.css';
import logo from '../logo.svg';
import ButtonBase from "./buttons";
import { Link } from 'react-router-dom';




export default class Header extends Component {
    render() {


        return (
            <div>
                <header className="header">
                    <div className='container'>

                        <a href="/"><img src={logo} className="logo" alt="logo" /></a>

                        <ul className='nav'>
                            <NavBtn link="/" content="о нас"></NavBtn>
                            <NavBtn link="/catalog" content="каталог"></NavBtn>
                            <NavBtn link="/support" content="поддержите проект"></NavBtn>
                        </ul>

                        <div className="registration">
                            {this.props.children}

                            {/* <ButtonBase variant="dark" link='#' content="вход"/>
                            <ButtonBase link="#" content="регистрация"/> */}
                            
                        </div>

                    </div>
                </header>


            </div>


        )
    }
}

function NavBtn({ content, link }) {
    return (
        <li><Link className="NavBarBtn" to={link}>{content}</Link></li>
    )
}
