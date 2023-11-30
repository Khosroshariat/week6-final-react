import React from 'react'
import photologo from '../images/movies-icon.jpg'
import { Link } from 'react-router-dom'

const Main = () => {

  return (
    <>
    <div className='landing'>
        <div className='container'>
            <div className='row'>
            <div className="header__wrapper">
                    <div className="header">
                        <h1 className="haeder__title">Collection of the best movies</h1>
                        <h3 className="haeder__sub-title">Find your favourite movies with <b className="orange">STAR MOVIES</b></h3>
                    </div >
                    <Link to='/movies' className="body__logo" >
                        <img className="body__img" src={photologo}  alt="" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Main