import movieTrailer from 'movie-trailer';
import React from 'react'
import YouTube from 'react-youtube';
import axios from './axios.js';

const imgUrl = 'https://image.tmdb.org/t/p/original/';

function Row(props) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(props.fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [props.fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  };

  const handleMovie = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    }
    else {
      movieTrailer(movie?.name || '')
        .then(url => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParam.get('v'));
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>

      <div className='row__posters'>
        {movies.map((item) => (
          <img
            onClick={() => handleMovie(item)}
            key={item.id}
            className={`row__poster ${props.isLargeRow && 'row__posterLarge'}`}
            src={`${imgUrl}${props.isLargeRow ? item.poster_path : item.backdrop_path}`}
            alt={item.name}>
          </img>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
