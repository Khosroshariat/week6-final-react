import React from 'react'
import headerphoto from '../images/star-movies-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

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
                        <Link to='/'>
                            <img className="nav__img" src={headerphoto} alt="" />
                        </Link>
                    </div>
                    <div className="nav__links">
                        <ul className="nav__link">
                            <li className="nav__lists">
                                <Link to='/' className="nav__list">Home</Link>
                            </li>
                            <li className="nav__lists">
                                <Link to='/movies' className="nav__list">Find Your Movie</Link>
                            </li>
                            <li className="nav__lists">
                                <Link to='/' className="nav__contact">Contact us</Link>
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
                                <Link to='/' className="menu__link">Home</Link>
                            </li>
                            <li className="menu__list">
                                <Link to="/movies" className="menu__link" >Find Your Movie</Link>
                            </li>
                            <li className="menu__list">
                                <Link to="/" className="menu__link" >Contact us</Link>
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