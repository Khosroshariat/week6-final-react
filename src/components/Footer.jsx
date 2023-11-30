import React from 'react'
import footerphoto from '../images/star-movies-logo.png'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="footer__body">
                    <figure className="img__wrapper">
                        <a href="/">
                            <img className="footer__img" src={footerphoto} alt="footer logo" />
                        </a>
                    </figure>
                    <ul className="footer__link">
                        <li className="footer__lists">
                            <a className="footer__list" href="/">Home</a>
                        </li>
                        <li className="footer__lists">
                            <a className="footer__list" href="/">Find Your Movie</a>
                        </li>
                        <li className="footer__lists">
                            <a className="footer__list" href="/">Contact us</a>
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