import axios from 'axios'
import React,  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Features()  {
    const {imdbID} = useParams();
    const [movieInfo, setMovieInfo] = useState("");


    async function getMovieInfo(imdbID) {
      try {
        const {data} = await axios.get(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=4d3b95cb`);
        setMovieInfo(data);
      }catch(error) {
        console.error('Error fetching movie info', error)
      }
    }

    useEffect(() => {
      if(imdbID){
        getMovieInfo(imdbID);
      }
    }, [imdbID]);
  return (
    <>
    <div className='loading'>
      <div className='container'>
        <div className='row'>
          <div className='movie__info'>
            <img className="movie__img" src={movieInfo?.Poster} alt="" />
            <div className='movie__detail'>
            <h1 className='movie__details'>{movieInfo?.Title}</h1>
            <h2 className='movie__details'><span>Genre:</span>{movieInfo?.Genre}</h2>
            <h2 className='movie__details'><span>Actors:</span>{movieInfo?.Actors}</h2>
            <h2 className='movie__details'><span>Description:</span>{movieInfo?.Plot}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Features