import React from 'react'
import footerphoto from '../images/star-movies-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="footer__body">
                    <figure className="img__wrapper">
                        <Link to="/">
                            <img className="footer__img" src={footerphoto} alt="footer logo" />
                        </Link>
                    </figure>
                    <ul className="footer__link">
                        <li className="footer__lists">
                            <Link className="footer__list" to="/">Home</Link>
                        </li>
                        <li className="footer__lists">
                            <Link className="footer__list" to="/movies">Find Your Movie</Link>
                        </li>
                        <li className="footer__lists">
                            <Link className="footer__list" to="/">Contact us</Link>
                        </li>
                    </ul>
                    <p className="footer__para">Copy Right © Star Movies</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer