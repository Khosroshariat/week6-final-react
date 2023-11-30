import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Search = () => {
    const [movies, setMovies] = useState([])
    const [searchType, setSearchType] = useState('')

    function filterMovie(filter) {
      console.log(filter)
      if(filter === "NEW_TO_OLD") {
       setMovies( movies.slice(0, 6).sort((a, b) => b.Year - a.Year) )
      }

      if(filter === "OLD_TO_NEW") {
        setMovies( movies.slice(0, 6).sort((a, b) => a.Year - b.Year) )
       }
      
    }
    
    const getMovieRequest = async (searchType) => {
      const url = `http://www.omdbapi.com/?s=${searchType}&apikey=4d3b95cb`
      
      // using fetch function :
      // const response = await fetch(url)
      // const data = await response.json()
      
      // using axios method
      const response = await axios.get(url)
      const data = response.data
      console.log(data)
      if(data.Search) {
        setMovies(data.Search)
      }
    }
    useEffect(() => {
      setTimeout(() => {
        getMovieRequest(searchType)
      }, 1000);
    },[searchType])
  return (
    <>
      <div className='landing'>
         <div className='container'>
             <div className='row'>
                 <div className="header__wrapper">
                    <div id="search__movies">
                            <form className="search__area"  >
                                <input type="text" 
                                placeholder="Search here" 
                                className="search__input"
                                onChange={(event) => setSearchType(event.target.value)}
                                ></input>
                            </form>
                    </div>
                      <div className='container'>
                         <div className="filter__selector">
                           <h4 className="filter__title">Filter </h4>
                           <select id="filter" onChange={(event) => filterMovie(event.target.value)}>
                               <option value="" disabled selected>Sort</option>
                               <option value="NEW_TO_OLD">New to Old</option>
                               <option value="OLD_TO_NEW">Old to New</option>
                           </select>
                         </div>
                      </div>
                    </div>
                  <div className='movie__link'>
                       {movies.map((movie, index) =>
                       <div className='movies_lists' key={index} >
                       <div className="movie__detail">

                          <img className="movie__img" src={movie.Poster || 'https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_SX300.jpg'} alt='movie poster' />

                          <h4 className='movie__details movie__title'>{movie.Title}</h4>
                          <h5 className='movie__details'>{movie.Year}</h5>
                          <h5 className='movie__details'>{movie.Type}</h5>
                       </div>
                       </div>
                         )
                         .slice(0, 6)}
                   </div>
          </div>
       </div>
    </div>
  </>
  )
}

export default Search