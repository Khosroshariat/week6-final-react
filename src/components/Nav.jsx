import React from 'react'

import headerphoto from '../images/star-movies-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Nav = () => {
    function openMnue() {
        document.body.classList += " menu--open"
    }
    function colseMenu() {
        document.body.classList.remove("menu--open")
    }
    
  return (
    <>
    <div className='landing'>
    <div className='container'>
        <div className='row'>
        <div className="nav__bar">
                    <div className="nav__logo">
                        <figure>
                            <img className="nav__img" src={headerphoto} alt="" />
                        </figure>
                    </div>
                    <div className="nav__links">
                        <ul className="nav__link">
                            <li className="nav__lists">
                                <a className="nav__list" href="/">Home</a>
                            </li>
                            <li className="nav__lists">
                                <a className="nav__list" href="/">Find Your Movie</a>
                            </li>
                            <li className="nav__lists">
                                <a className="nav__contact" href="/">Contact us</a>
                            </li>
                        </ul>
                    </div>

                    <button className="btn__menu" onClick={openMnue} >
                    <FontAwesomeIcon icon="fa-solid fa-bars" style={{color: "#bb7be5",}} />
                    </button>

                    <div className="menu__backdrop" onClick={colseMenu}>
                        <button className="btn__menu btn__menu-close" >
                        <FontAwesomeIcon icon="fa-solid fa-xmark" style={{color: "#b578dd",}} />
                        </button>
                        <ul className="menu__lists">
                            <li className="menu__list">
                                <a href="/" className="menu__link" >Home</a>
                            </li>
                            <li className="menu__list">
                                <a href="/" className="menu__link" >Find Your Movie</a>
                            </li>
                            <li className="menu__list"><a href="/" className="menu__link" >Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Nav