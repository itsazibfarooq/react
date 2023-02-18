import React from 'react'
import axios from './axios.js';
import requests from './requests';

function Banner() {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ]);
      return response;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

        <div>
          <button className='button__banner'>Play</button>
          <button className='button__banner'>My List</button>
        </div>

        <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>

      </div>
      <div className='banner--fadeBottom'></div>
    </header>
  )
}

export default Banner

